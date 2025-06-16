const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
//import json into the app.js
const petsData = require("./data/pets.json");

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
//routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/ragnar", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "ragnar.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});
app.get("/all-pets", (req, res) => {
  res.status(200).json({ petsData, user: "Joshua" });
});

//error handling
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "views", "NotFound.html"));
});
//starts the server to 'listen' for requests
app.listen(4000, () => {
  console.log("running on port 4000");
});
