const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

mongoose.connect("mongodb://localhost:27017/manucrud")
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("Mongo error:", err));

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

app.listen(7000, () => console.log("Server running on 7000"));
