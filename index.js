console.log("Mensaje desde el index");

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 3000;
const app_routes= require('./src/routes/index')

app.listen(port, () => console.log("Active port", 3000));
app.get("/", (req,res)=>
res.send("Bienvenido"));

mongoose
  .connect(process.env.STRING_CONNECTION)
  .then(() => console.log("We are connected with mongo"))
  .catch((error) => console.error(error));

  app.use(express.json());
  app_routes(app);