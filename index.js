const express = require("express");
//const databaseConnection = require("./database"); ye database wali file ka hai
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./model/UserModel");

//data baseee
// databaseConnection();

//app.use
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/crudoct")
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("data base conection is faild");
  });

app.post("/creatuser", async (req, res) => {
  const created = await UserModel.create(req.body);
  res.send("okk");
});
app.get("/getuser", async (req, res) => {
  const user = await UserModel.find();
  res.status(200).send(user);
});

app.get("/displayone", async (req, res) => {
  const manish = await UserModel.find();

  res.send(manish); //me jo bhi bheju ga ye frontend me jaega, data naam se
});

app.get("/updatefrontend", async (req, res) => {
  const mongosesedata = await UserModel.find();
  res.send(mongosesedata);
});

app.delete("/delete", async (req, res) => {
  //const kuch = await UserModel.findByIdAndDelete();
  const { myid } = req.query;
  const dele = await UserModel.findByIdAndDelete(myid);
  res.send(dele);
});

app.get("/view", async (req, res) => {
  const { id } = req.query;
  const edi = await UserModel.findById(id);
  console.log(edi);

  res.send(edi);
});

app.post("/editmanish", async (req, res) => {
  const { _id, name, email, age } = req.body;

  const newwaladata = await UserModel.findByIdAndUpdate(_id, {
    name: name,
    email: email,
    age: age,
  });
  console.log(req.body);
  res.send("data update ted");
});

app.listen(8000, () => {
  console.log("port running is on 8000");
});
