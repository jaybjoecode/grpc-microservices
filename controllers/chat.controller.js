const chatGrpcClientService = require("../grpc-services/chat.service");

const chatController = {};

chatController.index = (req, res) => {
  chatGrpcClientService.getCheckServer({}, (error, response) => {
    if (error) throw error;
    res.send(response);
  });
};

module.exports = chatController;