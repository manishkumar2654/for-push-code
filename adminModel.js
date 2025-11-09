const mongooser = require("mongoose");

const adminhaijo = new mongooser.Schema({
    id:Number,
    name:String,
    password:String
    
})

module.exports = mongooser.model("adminscemass", adminhaijo);