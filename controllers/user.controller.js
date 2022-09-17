const userGrpcClientService = require("../grpc-services/user.service");

const userController = {};

userController.index = (req, res) => {
  userGrpcClientService.getCheckServer({}, (error, response) => {
    if (error) throw error;
    res.send(response);
  });
};

module.exports = userController;
