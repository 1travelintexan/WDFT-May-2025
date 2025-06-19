const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const RecipeModel = require("./models/Recipe.model");
// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION
mongoose
  .connect(`mongodb://localhost:27017/recipe-lab`)
  .then((res) => console.log("connected successfully to the DB"))
  .catch((err) => console.log(err));

// ROUTES
//  GET  / route - This is just an example route
app.get("/", (req, res) => {
  res.send("<h1>LAB | Express Mongoose Recipes</h1>");
});

//  Iteration 3 - Create a Recipe route
//  POST  /recipes route
app.post("/recipes", async (req, res) => {
  try {
    const createdRecipe = await RecipeModel.create(req.body);
    res.status(201).json(createdRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//  Iteration 4 - Get All Recipes
//  GET  /recipes route
app.get("/recipes", (req, res) => {
  RecipeModel.find()
    .then((allRecipes) => {
      res.status(200).json(allRecipes);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});
//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route
app.get("/recipes/:recipeId", async (req, res) => {
  try {
    const oneRecipeFromDB = await RecipeModel.findById(req.params.recipeId);
    if (!oneRecipeFromDB) {
      res.status(400).json({ errorMessage: "Recipe not found" });
    } else {
      res.status(200).json(oneRecipeFromDB);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route
app.put("/recipes/:recipeId", async (req, res) => {
  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      req.params.recipeId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route
app.delete("/recipes/:recipeId", async (req, res) => {
  try {
    await RecipeModel.findByIdAndDelete(req.params.recipeId);
    const allRecipes = await RecipeModel.find();
    res.status(200).json(allRecipes);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
// Start the server
app.listen(3000, () => console.log("My first app listening on port 3000!"));

//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
