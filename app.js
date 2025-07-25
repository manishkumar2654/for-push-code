const express = require("express");
const app = express();
const userModel = require("./usermodel");



app.get("/", (req, res) => {

    res.send("hey");
});

app.get("/create", async (req, res)=>{
    let createduser = await userModel.create({
          name: "neha",
    username: "nehaa",
    email: "www.naii@gmail.com"
    })
   res.send(createduser);
    
});


app.get("/update", async (req, res)=>{
   let updateuser = await userModel.findOneAndUpdate({username: "manish"}, {name: "manish kumar"}, {new: true})

   res.send(updateuser);
    
});


app.get("/read", async (req, res)=>{
    let readuser = await userModel.find();
    res.send(readuser);
})
app.get("/delete", async (req, res)=>{
    let byuser = await userModel.findOneAndDelete({name: "mummy"});
  
    res.send(byuser);
})


app.listen(3000);