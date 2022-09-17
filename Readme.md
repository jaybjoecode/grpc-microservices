Simple example about microservices with gRPC

index.js (gateway) // http://localhost:3000
* |__ auth.server.js // http://localhost:50052
* |__ chat.server.js // http://localhost:50053
* |__ user.server.js // http://localhost:50051