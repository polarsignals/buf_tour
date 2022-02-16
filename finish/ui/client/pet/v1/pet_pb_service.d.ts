// package: pet.v1
// file: pet/v1/pet.proto

import * as pet_v1_pet_pb from "../../pet/v1/pet_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PetStoreServiceGetPet = {
  readonly methodName: string;
  readonly service: typeof PetStoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pet_v1_pet_pb.GetPetRequest;
  readonly responseType: typeof pet_v1_pet_pb.GetPetResponse;
};

type PetStoreServicePutPet = {
  readonly methodName: string;
  readonly service: typeof PetStoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pet_v1_pet_pb.PutPetRequest;
  readonly responseType: typeof pet_v1_pet_pb.PutPetResponse;
};

type PetStoreServiceDeletePet = {
  readonly methodName: string;
  readonly service: typeof PetStoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pet_v1_pet_pb.DeletePetRequest;
  readonly responseType: typeof pet_v1_pet_pb.DeletePetResponse;
};

type PetStoreServicePurchasePet = {
  readonly methodName: string;
  readonly service: typeof PetStoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pet_v1_pet_pb.PurchasePetRequest;
  readonly responseType: typeof pet_v1_pet_pb.PurchasePetResponse;
};

export class PetStoreService {
  static readonly serviceName: string;
  static readonly GetPet: PetStoreServiceGetPet;
  static readonly PutPet: PetStoreServicePutPet;
  static readonly DeletePet: PetStoreServiceDeletePet;
  static readonly PurchasePet: PetStoreServicePurchasePet;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class PetStoreServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPet(
    requestMessage: pet_v1_pet_pb.GetPetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pet_v1_pet_pb.GetPetResponse|null) => void
  ): UnaryResponse;
  getPet(
    requestMessage: pet_v1_pet_pb.GetPetRequest,
    callback: (error: ServiceError|null, responseMessage: pet_v1_pet_pb.GetPetResponse|null) => void
  ): UnaryResponse;
  putPet(
    requestMessage: pet_v1_pet_pb.PutPetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pet_v1_pet_pb.PutPetResponse|null) => void
  ): UnaryResponse;
  putPet(
    requestMessage: pet_v1_pet_pb.PutPetRequest,
    callback: (error: ServiceError|null, responseMessage: pet_v1_pet_pb.PutPetResponse|null) => void
  ): UnaryResponse;
  deletePet(
    requestMessage: pet_v1_pet_pb.DeletePetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pet_v1_pet_pb.DeletePetResponse|null) => void
  ): UnaryResponse;
  deletePet(
    requestMessage: pet_v1_pet_pb.DeletePetRequest,
    callback: (error: ServiceError|null, responseMessage: pet_v1_pet_pb.DeletePetResponse|null) => void
  ): UnaryResponse;
  purchasePet(
    requestMessage: pet_v1_pet_pb.PurchasePetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pet_v1_pet_pb.PurchasePetResponse|null) => void
  ): UnaryResponse;
  purchasePet(
    requestMessage: pet_v1_pet_pb.PurchasePetRequest,
    callback: (error: ServiceError|null, responseMessage: pet_v1_pet_pb.PurchasePetResponse|null) => void
  ): UnaryResponse;
}

