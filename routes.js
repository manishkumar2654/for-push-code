const express= require("express");
const usercontrolerkaitem = require("../controller/UserController");

const Router = express.Router();


Router.post("create", usercontrolerkaitem.Createcrud )





module.exports = Router;