const express = require("express");
const route = express.Router();
const userController = require("../controller/userController");

route.get("/home", userController.homePage);
route.post("/signup", userController.userSignUp);
route.post("/userlogin", userController.userlogin);

module.exports = route;
