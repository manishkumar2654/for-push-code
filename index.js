const express = require("express");
const databaseConnection = require("./database");


//data baseee
databaseConnection();


//app.use
const app = express();

app.get("/",(req, res)=>{
    res.send("hello world")
})  

app.listen(8000, () => {
    console.log( "port running is on 8000");
    
})