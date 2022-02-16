package main

import (
	"context"
	"fmt"
	"log"
	"net"

	// This import path is based on the name declaration in the go.mod,
	// and the gen/proto/go output location in the buf.gen.yaml.
	petv1 "github.com/bufbuild/buf-tour/petstore/gen/proto/go/pet/v1"
	"github.com/google/uuid"
	"google.golang.org/grpc"
)

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}

func run() error {
	listenOn := "127.0.0.1:8080"
	listener, err := net.Listen("tcp", listenOn)
	if err != nil {
		return fmt.Errorf("failed to listen on %s: %w", listenOn, err)
	}

	server := grpc.NewServer()
	petv1.RegisterPetStoreServiceServer(server, &petStoreServiceServer{
		pets: map[string]*petv1.Pet{},
	})
	log.Println("Listening on", listenOn)
	if err := server.Serve(listener); err != nil {
		return fmt.Errorf("failed to serve gRPC server: %w", err)
	}

	return nil
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
