const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = './protos/user.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const UserService =
  grpc.loadPackageDefinition(packageDefinition).UserService;

const userGrpcClientService = new UserService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

module.exports = userGrpcClientService;


