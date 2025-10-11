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

  app.post("/creatuser", async(req, res) => {
   
    const created = await UserModel.create(req.body)
   res.send("okk")
  })
  app.get("/getuser" , async(req,res)=>{
    const user = await UserModel.find()
    res.status(200).send(user)
    console.log(user);
    
  })

  app.get("/displayone", async (req, res) => {
    console.log("hello");   //ye wala yahi dikhega mtlb backend me hi, 
    const manish = await UserModel.find();
    console.log(manish);
    
    res.send(manish)  //me jo bhi bheju ga ye frontend me jaega, data naam se
  })

  app.get("/updatefrontend", async (req, res) => {
    const mongosesedata = await UserModel.find();
    res.send(mongosesedata)
  })

  app.delete("/delete", async (req, res) => {
     //const kuch = await UserModel.findByIdAndDelete();
     console.log(req.query);
    const {myid} = req.query

    const dele = await UserModel.findByIdAndDelete(myid);
     
    console.log("kkkk");
    
    res.send(dele);
  })

app.listen(8000, () => {
  console.log("port running is on 8000");
});
