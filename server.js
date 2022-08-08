//Dependencies
const express = require("express");

//Configurations
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Routes
app.get("/", (req, res) => {
  res.send("This is an awesome app about different breads!");
});

//Breads
const breadsController = require("./controllers/breads_controller");
app.use("/breads", breadsController);

//Listen
app.listen(PORT, () => {
  console.log(`The server has awoken on Port ${PORT}`);
});
