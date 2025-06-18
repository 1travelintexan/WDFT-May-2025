const express = require("express");
const app = express();
const morgan = require("morgan");
//variable for mongoose to connect to the DB
const mongoose = require("mongoose");
//import the User Model to CRUD users
const UserModel = require("./models/user.model");
const PetModel = require("./models/pet.model");
//connecting to the DB
mongoose
  .connect("mongodb://localhost:27017/our-second-db")
  .then(() => {
    console.log("connected to the DB, nice work");
  })
  .catch((err) => console.log(err));

//middlewares
app.use(morgan("dev"));
//allows you to parse post routes and get the req.body
app.use(express.json());

//routes
//route to add new user to DB
app.post("/create-user", (req, res) => {
  UserModel.create(req.body)
    .then((createdUser) => {
      console.log("user created!", createdUser);
      res.status(201).json(createdUser);
    })
    .catch((err) => {
      console.log(err);
      if (err.code === 11000) {
        res.status(500).json({ errorMessage: "Invalid Credentials" });
      } else {
        res.status(500).json({ errorMessage: "problem creating user" });
      }
    });
});
//route to get all users from DB
app.get("/all-users", async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).json(allUsers);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//route to find one specific user by their id
app.get("/one-user/:userId", async (req, res) => {
  try {
    const foundUser = await UserModel.findById(req.params.userId).populate(
      "pets"
    );
    res.status(200).json(foundUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//route to delete user
app.delete("/delete-user/:userId", async (req, res) => {
  try {
    //destructure params
    const { userId } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    res.status(204).json(deletedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//route to update a user
app.patch("/update-user/:userId", (req, res) => {
  UserModel.findByIdAndUpdate(req.params.userId, req.body, { new: true })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//***********Pet Routes *************/
//route to create a pet
app.post("/create-pet", async (req, res) => {
  try {
    const createdPet = await PetModel.create(req.body);
    const userWithNewPet = await UserModel.findByIdAndUpdate(
      req.body.owner,
      {
        $push: { pets: createdPet._id },
      },
      { new: true }
    );
    res.status(201).json({ createdPet, userWithNewPet });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//route to find one specfic pet
app.get("/one-pet/:petId", async (req, res) => {
  try {
    const foundPet = await PetModel.findById(req.params.petId).populate(
      "owner"
    );
    res.status(200).json(foundPet);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//starting the server
app.listen(5005, () => {
  console.log("server running on http://localhost:5005");
});
