package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	// This import path is based on the name declaration in the go.mod,
	// and the gen/proto/go output location in the buf.gen.yaml.
	petv1 "github.com/bufbuild/buf-tour/petstore/gen/proto/go/pet/v1"
	"google.golang.org/grpc"
)

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}
func run() error {
	connectTo := "127.0.0.1:8080"
	conn, err := grpc.Dial(connectTo, grpc.WithBlock(), grpc.WithInsecure())
	if err != nil {
		return fmt.Errorf("failed to connect to PetStoreService on %s: %w", connectTo, err)
	}
	log.Println("Connected to", connectTo)

	petStore := petv1.NewPetStoreServiceClient(conn)
	resp, err := petStore.PutPet(context.Background(), &petv1.PutPetRequest{
		PetType: petv1.PetType_PET_TYPE_SNAKE,
		Name:    "Ekans",
	})
	if err != nil {
		return fmt.Errorf("failed to PutPet: %w", err)
	}

	log.Println("Successfully PutPet")

	request := fmt.Sprintf("http://127.0.0.1:8080/v1/pets/%v", resp.Pet.PetId)
	log.Println("HTTP GET request", request)
	r, err := http.Get(request)
	if err != nil {
		return fmt.Errorf("failed to Get pet: %w", err)
	}
	defer r.Body.Close()

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		return fmt.Errorf("failed to read response: %w", err)
	}

	petresp := &petv1.GetPetResponse{}
	if err := json.Unmarshal(b, petresp); err != nil {
		return fmt.Errorf("failed to unmarshal pet: %w", err)
	}

	fmt.Println("HTTP Get request returned: ", petresp)
	return nil
}
