const express = require("express");
const app = express();

//use for from data handling
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello world ");
});

app.get("/about", function (req, res) {
  res.send("this is sbout  page ");
});

app.listen(3000);
