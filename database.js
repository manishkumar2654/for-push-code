const mongoose = require("mongoose");

const databaseConnection = async () => {
   await mongoose.connect("mongodb://localhost:27017/booktalwind")
   .then(()=>{
    console.log("db is connected")
   })
   .catch((err)=>{
    console.log("data base conection is faild");
    
   })
}

module.exports = databaseConnection;