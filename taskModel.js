const mongoose = require("mongoose");
const taskSchema= new mongoose.Schema({
    title:String,
    description:String,
    comday:Number,
    userid:{type: mongoose.Types.ObjectId, ref: "user"}
})

module.exports = mongoose.model("task", taskSchema);