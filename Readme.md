# Simple example about microservices with gRPC

index.js (gateway) // http://localhost:3000
* |__ auth.server.js // http://localhost:50052
* |__ chat.server.js // http://localhost:50053
* |__ user.server.js // http://localhost:50051

# Run servers in this order
* node apis/auth.serve.js
* node apis/chat.serve.js
* node apis/user.serve.js
* node index.js
