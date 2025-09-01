const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  name: String,
  city: String,
  password: String,
});

module.exports = mongoose.model("user", userSchema);
