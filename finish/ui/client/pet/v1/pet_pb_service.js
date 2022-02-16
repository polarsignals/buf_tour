// package: pet.v1
// file: pet/v1/pet.proto

var pet_v1_pet_pb = require("../../pet/v1/pet_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PetStoreService = (function () {
  function PetStoreService() {}
  PetStoreService.serviceName = "pet.v1.PetStoreService";
  return PetStoreService;
}());

PetStoreService.GetPet = {
  methodName: "GetPet",
  service: PetStoreService,
  requestStream: false,
  responseStream: false,
  requestType: pet_v1_pet_pb.GetPetRequest,
  responseType: pet_v1_pet_pb.GetPetResponse
};

PetStoreService.PutPet = {
  methodName: "PutPet",
  service: PetStoreService,
  requestStream: false,
  responseStream: false,
  requestType: pet_v1_pet_pb.PutPetRequest,
  responseType: pet_v1_pet_pb.PutPetResponse
};

PetStoreService.DeletePet = {
  methodName: "DeletePet",
  service: PetStoreService,
  requestStream: false,
  responseStream: false,
  requestType: pet_v1_pet_pb.DeletePetRequest,
  responseType: pet_v1_pet_pb.DeletePetResponse
};

PetStoreService.PurchasePet = {
  methodName: "PurchasePet",
  service: PetStoreService,
  requestStream: false,
  responseStream: false,
  requestType: pet_v1_pet_pb.PurchasePetRequest,
  responseType: pet_v1_pet_pb.PurchasePetResponse
};

exports.PetStoreService = PetStoreService;

function PetStoreServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PetStoreServiceClient.prototype.getPet = function getPet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PetStoreService.GetPet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PetStoreServiceClient.prototype.putPet = function putPet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PetStoreService.PutPet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PetStoreServiceClient.prototype.deletePet = function deletePet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PetStoreService.DeletePet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PetStoreServiceClient.prototype.purchasePet = function purchasePet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PetStoreService.PurchasePet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.PetStoreServiceClient = PetStoreServiceClient;

