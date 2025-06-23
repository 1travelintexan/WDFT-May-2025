const { isAuthenticated } = require("../middlewares/jwt.middleware");
const PetModel = require("../models/Pet.model");
const UserModel = require("../models/User.model");
const router = require("express").Router();

//route to create a pet, then add that pet to the array inside a user
router.post("/add-pet", isAuthenticated, async (req, res) => {
  const theOwnerId = req.payload._id;
  try {
    const createdPet = await PetModel.create({
      ...req.body,
      owner: theOwnerId,
    });
    const updatedUser = await UserModel.findByIdAndUpdate(
      theOwnerId,
      {
        $push: { pets: createdPet._id },
      },
      { new: true }
    );

    res.status(201).json({ createdPet, updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//route to get all pets for one specific user
router.get("/user-pets", isAuthenticated, async (req, res) => {
  try {
    const petsOfAUser = await UserModel.findById(req.payload._id)
      .populate("pets")
      .select("pets");
    res.status(200).json(petsOfAUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//route to remove a pet from the DB
router.delete("/delete-pet/:petId", isAuthenticated, async (req, res) => {
  try {
    const deletedPetFromPetCollection = await PetModel.findByIdAndDelete(
      req.params.petId
    );
    const userWithRemovedPet = await UserModel.findByIdAndUpdate(
      req.payload._id,
      { $pull: { pets: req.params.petId } },
      { new: true }
    )
      .populate("pets")
      .select("username pets");
    res.status(200).json(userWithRemovedPet);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
