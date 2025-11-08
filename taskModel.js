const { default: mongoose } = require("mongoose");
const mongooser = require("mongoose");

const taskSchema = new mongooser.Schema({
  tasks: String,
  dates: Number,
  userid: {
    type: mongoose.Types.ObjectId,
    ref: "userschema",
  },
  taskstatus:{type: Boolean, default: false}
});

module.exports = mongooser.model("taskuser", taskSchema);
