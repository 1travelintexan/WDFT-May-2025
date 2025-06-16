//require the package and store it in a variable
const express = require("express");
//invoke the variable to create a new instance of the package express
const app = express();
const morgan = require("morgan");

//import data into the server
const petsData = require("./data.json");

// our middlewares
//this middleware tells the server where to find static files
app.use(express.static("public"));
//this middleware logs every request to the terminal for debugging and security
app.use(morgan("dev"));
//this middleware converts POST requests to usable format
app.use(express.json());

//********************ROUTES *****************/
//our routes
//syntax for a route is app. the verb () and inside the () it needs the path '/' then a callback function
app.get("/", (req, res) => {
  //to send a file we use ... the .sendFile() method
  //use the absolute path for .sendFile
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/pets", (req, res) => {
  console.log(petsData);
  //sending json data back
  res.status(200).json(petsData);
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

//middleware for 404
app.use((req, res) => {
  res.sendFile(__dirname + "/views/NotFound.html");
});
//one method that express offers is the 'listen' method
app.listen(5005, () => {
  console.log("server running http://localhost:5005");
});
