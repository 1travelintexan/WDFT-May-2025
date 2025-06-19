const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
//route to create a user
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //check if the req.body has all the correct fields
    if (!name || !password || !email) {
      res.status(400).json({ errorMessage: "please provide all fields" });
    } else {
      const foundUserInDB = await UserModel.findOne({ email });
      if (foundUserInDB) {
        res.status(400).json({ errorMessage: "Email already taken" });
      } else {
        //first generate a salt
        const theSalt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, theSalt);

        const newUserInDB = await UserModel.create({
          ...req.body,
          username: name,
          password: hashedPassword,
        });
        res.status(201).json(newUserInDB);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});
//route to login a already created user
router.post("/login", async (req, res) => {
  //first is destructure the req.body
  const { email, password } = req.body;
  try {
    const foundUser = await UserModel.findOne({ email: email }).select(
      "username email password"
    );
    //checking if the email exists in the DB
    if (!foundUser) {
      res.status(400).json({ errorMessage: "Invalid Credentials" });
    } else {
      //checking if the password matches for the found User
      if (!bcryptjs.compareSync(req.body.password, foundUser.password)) {
        res.status(400).json({ errorMessage: "Password incorrect" });
      } else {
        foundUser.password = null;
        res.status(200).json(foundUser);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});
//route to find one specific user based on their id
router.get("/one-user/:userId", async (req, res) => {
  try {
    const foundUser = await UserModel.findById(req.params.userId).lean();
    // console.log("here is the user", foundUser);
    delete foundUser.password;
    res.status(200).json(foundUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});
//route to update the username or email of a user
router.put("/update-user/:userId", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});
//route to delete a user
router.delete("/delete-user/:userId", (req, res) => {
  //destructure the params
  const { userId } = req.params;
  UserModel.findByIdAndDelete(userId)
    .then((deleteUser) => {
      res.status(200).json(deleteUser);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error.message);
    });
});

module.exports = router;
