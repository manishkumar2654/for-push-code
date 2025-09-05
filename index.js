const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoute")


const app = express();

mongoose.connect("mongodb://localhost:27017/ekorcrudthekkkkk")
.then(() => console.log("db conect hua"))
.catch((err) => console.error("mongo wali errr yad hai"))


app.use(cors());
app.use(express.json());


app.use("/", userRoutes);


app.listen(7000, () => console.log("server chalu ho gya 7000 pr"))