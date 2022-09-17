const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = './protos/auth.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const AuthService =
  grpc.loadPackageDefinition(packageDefinition).AuthService;

const authGrpcClientService = new AuthService(
  "localhost:50052",
  grpc.credentials.createInsecure()
);

module.exports = authGrpcClientService;


