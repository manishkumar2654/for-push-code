const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

const cors = require("cors");
const cookieParser = require("cookie-parser");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Set Cookie
app.get("/setcookie", (req, res) => {
  res.cookie("name", "manish", { maxAge: 60 * 1000 });
  res.cookie("course", "java");
  res.cookie("fees", "5000");
  res.send("Cookies have been sent");
});

// Display Cookie
app.get("/displaycookie", (req, res) => {
  const { name, course, fees } = req.cookies;
  res.send({ name, course, fees });
});

// Delete Cookie
app.get("/deletecookie", (req, res) => {
  res.clearCookie("name");
  res.clearCookie("course");
  res.clearCookie("fees");
  res.send("Cookies deleted");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
