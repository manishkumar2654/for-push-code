const express = require("express");
const route = express.Router();
const StuController = require("../controller/stuController");

route.get("/home", StuController.homepage);
route.get("/insert", StuController.insertPage)
route.post("/datasave", StuController.dataSave);

module.exports=route;