const grpc = require("@grpc/grpc-js");
const PROTO_PATH = "./protos/user.proto";
var protoLoader = require("@grpc/proto-loader");

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const checkServer = (call, callback) => {
  callback(null, { status: 200, message: 'USER SERVER ONLINE' });
};

server.addService(proto.UserService.service, {
  GetCheckServer: checkServer
});

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log(`Server running at http://127.0.0.1:${port}`);
    server.start();
  }
);
