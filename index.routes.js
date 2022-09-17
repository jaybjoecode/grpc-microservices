const express = require("express");
const router = express.Router();
const userController = require("./controllers/user.controller");
const authController = require("./controllers/auth.controller");
const chatController = require("./controllers/chat.controller");

router.get("/", (req, resp) => {
  return resp.send("GATEWAY SERVER!");
});

// User Controller
router.get("/user", userController.index);

// Auth Controller
router.get("/auth", authController.index);

// Chat Controller
router.get("/chat", chatController.index);

module.exports = router;
