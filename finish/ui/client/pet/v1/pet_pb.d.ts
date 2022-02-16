// package: pet.v1
// file: pet/v1/pet.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as payment_v1alpha1_payment_pb from "../../payment/v1alpha1/payment_pb";
import * as google_type_datetime_pb from "../../google/type/datetime_pb";

export class Pet extends jspb.Message {
  getPetType(): PetTypeMap[keyof PetTypeMap];
  setPetType(value: PetTypeMap[keyof PetTypeMap]): void;

  getPetId(): string;
  setPetId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_type_datetime_pb.DateTime | undefined;
  setCreatedAt(value?: google_type_datetime_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pet.AsObject;
  static toObject(includeInstance: boolean, msg: Pet): Pet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pet;
  static deserializeBinaryFromReader(message: Pet, reader: jspb.BinaryReader): Pet;
}

export namespace Pet {
  export type AsObject = {
    petType: PetTypeMap[keyof PetTypeMap],
    petId: string,
    name: string,
    createdAt?: google_type_datetime_pb.DateTime.AsObject,
  }
}

export class GetPetRequest extends jspb.Message {
  getPetId(): string;
  setPetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPetRequest): GetPetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPetRequest;
  static deserializeBinaryFromReader(message: GetPetRequest, reader: jspb.BinaryReader): GetPetRequest;
}

export namespace GetPetRequest {
  export type AsObject = {
    petId: string,
  }
}

export class GetPetResponse extends jspb.Message {
  hasPet(): boolean;
  clearPet(): void;
  getPet(): Pet | undefined;
  setPet(value?: Pet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPetResponse): GetPetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPetResponse;
  static deserializeBinaryFromReader(message: GetPetResponse, reader: jspb.BinaryReader): GetPetResponse;
}

export namespace GetPetResponse {
  export type AsObject = {
    pet?: Pet.AsObject,
  }
}

export class PutPetRequest extends jspb.Message {
  getPetType(): PetTypeMap[keyof PetTypeMap];
  setPetType(value: PetTypeMap[keyof PetTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutPetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutPetRequest): PutPetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutPetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutPetRequest;
  static deserializeBinaryFromReader(message: PutPetRequest, reader: jspb.BinaryReader): PutPetRequest;
}

export namespace PutPetRequest {
  export type AsObject = {
    petType: PetTypeMap[keyof PetTypeMap],
    name: string,
  }
}

export class PutPetResponse extends jspb.Message {
  hasPet(): boolean;
  clearPet(): void;
  getPet(): Pet | undefined;
  setPet(value?: Pet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutPetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutPetResponse): PutPetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutPetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutPetResponse;
  static deserializeBinaryFromReader(message: PutPetResponse, reader: jspb.BinaryReader): PutPetResponse;
}

export namespace PutPetResponse {
  export type AsObject = {
    pet?: Pet.AsObject,
  }
}

export class DeletePetRequest extends jspb.Message {
  getPetId(): string;
  setPetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePetRequest): DeletePetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePetRequest;
  static deserializeBinaryFromReader(message: DeletePetRequest, reader: jspb.BinaryReader): DeletePetRequest;
}

export namespace DeletePetRequest {
  export type AsObject = {
    petId: string,
  }
}

export class DeletePetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePetResponse): DeletePetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePetResponse;
  static deserializeBinaryFromReader(message: DeletePetResponse, reader: jspb.BinaryReader): DeletePetResponse;
}

export namespace DeletePetResponse {
  export type AsObject = {
  }
}

export class PurchasePetRequest extends jspb.Message {
  getPetId(): string;
  setPetId(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): payment_v1alpha1_payment_pb.Order | undefined;
  setOrder(value?: payment_v1alpha1_payment_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchasePetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurchasePetRequest): PurchasePetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurchasePetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchasePetRequest;
  static deserializeBinaryFromReader(message: PurchasePetRequest, reader: jspb.BinaryReader): PurchasePetRequest;
}

export namespace PurchasePetRequest {
  export type AsObject = {
    petId: string,
    order?: payment_v1alpha1_payment_pb.Order.AsObject,
  }
}

export class PurchasePetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchasePetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PurchasePetResponse): PurchasePetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurchasePetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchasePetResponse;
  static deserializeBinaryFromReader(message: PurchasePetResponse, reader: jspb.BinaryReader): PurchasePetResponse;
}

export namespace PurchasePetResponse {
  export type AsObject = {
  }
}

export interface PetTypeMap {
  PET_TYPE_UNSPECIFIED: 0;
  PET_TYPE_CAT: 1;
  PET_TYPE_DOG: 2;
  PET_TYPE_SNAKE: 3;
  PET_TYPE_HAMSTER: 4;
}

export const PetType: PetTypeMap;

