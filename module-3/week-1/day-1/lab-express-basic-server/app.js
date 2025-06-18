// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
// CREATE EXPRESS APP
// Here you should create your Express app:
const projectsJson = require("./data/projects.json");
const articlesJson = require("./data/articles.json");
// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});
app.get("/api/projects", (req, res) => {
  res.status(200).json(projectsJson);
});
app.get("/api/articles", (req, res) => {
  res.status(200).json(articlesJson);
});

//start dynamic routes
app.get("/pet-name/:petId", (req, res) => {
  const { petId } = req.params;
  res.send(petId);
});

app.get("/blah", (req, res) => {
  const { petName } = req.query;
  res.send(petName);
});
// app.use((req, res) => {
//   res.sendFile(__dirname + "/views/not-found.html");
// });
// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("server running on port 5005");
});
