package main

import (
	"context"
	"io/fs"
	"log"
	"net/http"
	"strings"

	// This import path is based on the name declaration in the go.mod,
	// and the gen/proto/go output location in the buf.gen.yaml.
	petv1 "github.com/bufbuild/buf-tour/petstore/gen/proto/go/pet/v1"
	ui "github.com/bufbuild/buf-tour/petstore/ui/petstore"
	"github.com/go-chi/cors"
	"github.com/google/uuid"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
	"google.golang.org/grpc"
)

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}

func run() error {
	port := ":3000"

	server := grpc.NewServer()
	petv1.RegisterPetStoreServiceServer(server, &petStoreServiceServer{
		pets: map[string]*petv1.Pet{},
	})

	// Register the grpc-gateway
	grpcWebMux := runtime.NewServeMux()
	petv1.RegisterPetStoreServiceHandlerFromEndpoint(
		context.Background(),
		grpcWebMux,
		port,
		[]grpc.DialOption{
			grpc.WithInsecure(),
		},
	)

	uifs, _ := fs.Sub(ui.FS, "public")
	uiHandler, _ := uiHandler(uifs)

	log.Println("starting server", port)
	return http.ListenAndServe(port, cors.AllowAll().Handler(grpcHandlerFunc(server, fallbackNotFound(grpcWebMux, uiHandler))))
}

func uiHandler(uifs fs.FS) (*http.ServeMux, error) {
	uiHandler := http.ServeMux{}
	uiHandler.Handle("/", http.FileServer(http.FS(uifs)))
	return &uiHandler, nil
}

func grpcHandlerFunc(grpcServer *grpc.Server, otherHandler http.Handler) http.Handler {
	wrappedGrpc := grpcweb.WrapServer(grpcServer,
		grpcweb.WithAllowNonRootResource(true),
		grpcweb.WithOriginFunc(func(origin string) bool {
			return true
		}))

	return h2c.NewHandler(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.ProtoMajor == 2 && strings.Contains(r.Header.Get("Content-Type"), "application/grpc") {
			grpcServer.ServeHTTP(w, r)
		} else {

			// handle grpc web requests
			if wrappedGrpc.IsGrpcWebRequest(r) {
				wrappedGrpc.ServeHTTP(w, r)
				return
			}

			otherHandler.ServeHTTP(w, r)
		}
	}), &http2.Server{})
}

// petStoreServiceServer implements the PetStoreService API.
type petStoreServiceServer struct {
	petv1.UnimplementedPetStoreServiceServer
	pets map[string]*petv1.Pet
}

// PutPet adds the pet associated with the given request into the PetStore.
func (s *petStoreServiceServer) PutPet(ctx context.Context, req *petv1.PutPetRequest) (*petv1.PutPetResponse, error) {
	name := req.GetName()
	petType := req.GetPetType()
	log.Println("Got a request to create a", petType, "named", name)

	p := &petv1.Pet{
		PetId:   uuid.New().String(),
		PetType: petType,
		Name:    name,
	}

	// Save the pet in memory
	s.pets[p.PetId] = p

	return &petv1.PutPetResponse{
		Pet: p,
	}, nil
}

func (s *petStoreServiceServer) GetPet(ctx context.Context, req *petv1.GetPetRequest) (*petv1.GetPetResponse, error) {
	log.Println("Got a request to Get", req.PetId)

	// Save the pet in memory
	p, ok := s.pets[req.PetId]
	if !ok {
		return &petv1.GetPetResponse{}, nil
	}

	return &petv1.GetPetResponse{
		Pet: p,
	}, nil
}

// wrapResponseWriter is a proxy around an http.ResponseWriter that allows you to hook into the response.
type wrapResponseWriter struct {
	http.ResponseWriter

	wroteHeader bool
	code        int
}

func (wrw *wrapResponseWriter) WriteHeader(code int) {
	if !wrw.wroteHeader {
		wrw.code = code
		if code != http.StatusNotFound {
			wrw.wroteHeader = true
			wrw.ResponseWriter.WriteHeader(code)
		}
	}
}

// Write sends bytes to wrapped response writer, in case of not found it suppresses further writes.
func (wrw *wrapResponseWriter) Write(b []byte) (int, error) {
	if wrw.notFound() {
		return len(b), nil
	}
	return wrw.ResponseWriter.Write(b)
}

func (wrw *wrapResponseWriter) notFound() bool {
	return wrw.code == http.StatusNotFound
}

// fallbackNotFound wraps the given handler with the `fallback` handle to fallback in case of not found.
func fallbackNotFound(handler, fallback http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		frw := wrapResponseWriter{ResponseWriter: w}
		handler.ServeHTTP(&frw, r)
		if frw.notFound() {
			w.Header().Del("Content-Type")
			fallback.ServeHTTP(w, r)
		}
	}
}
