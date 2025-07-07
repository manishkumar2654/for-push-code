const express = require("express");
const app=express();
const hbs = require("hbs")
const StuRoute = require("./routes/studentRoutes");
const bodyparser = require("body-parser");

app.set("view engine", "hbs")

const sequelize = require('./config/database');


sequelize.sync({ force: true }).then(async () => {
    console.log("Database synced!");
});

app.use(bodyparser.urlencoded());
app.use(bodyparser.json())


app.use("/students", StuRoute);

app.get("/", (req, res)=>{
    res.render("home"); 
})


app.listen(8000, ()=>{
    console.log(`Server Run On Port 8000 wale port me`);
})