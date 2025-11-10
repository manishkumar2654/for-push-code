const mongooser = require("mongoose");

const userhai = new mongooser.Schema({
    userid:Number,
    name:String,
    job:String,
    password:String
    
})

module.exports = mongooser.model("userschema", userhai);