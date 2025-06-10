
const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("okya");
})

app.get("/home", (req, res)=>{
    res.send("this is home page")
})

app.get("/about", (req, res)=>{
    res.send("about pagesssss")
})

app.get("/manish", (req, res)=>{
    res.send("manish pagessss")
})



app.listen(9000, ()=>{
    console.log("server run on port 9000");
    
})