const authGrpcClientService = require("../grpc-services/auth.service");

const authController = {};

authController.index = (req, res) => {
  authGrpcClientService.getCheckServer({}, (error, response) => {
    if (error) throw error;
    res.send(response);
  });
};

module.exports = authController;