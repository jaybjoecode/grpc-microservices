const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = './protos/chat.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const ChatService =
  grpc.loadPackageDefinition(packageDefinition).ChatService;

const chatGrpcClientService = new ChatService(
  "localhost:50053",
  grpc.credentials.createInsecure()
);

module.exports = chatGrpcClientService;


