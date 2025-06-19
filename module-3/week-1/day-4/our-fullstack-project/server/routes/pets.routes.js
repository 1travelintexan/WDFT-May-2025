const PetModel = require("../models/Pet.model");
const router = require("express").Router();

//route to create a pet
router.post("/create", async (req, res) => {
  try {
    const createdPet = await PetModel.create(req.body);
    res.status(201).json(createdPet);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});
//route to find all pets
router.get("/all-pets", async (req, res) => {
  try {
    const allPetsInDB = await PetModel.find().populate(
      "owner",
      "username email"
    );
    res.status(200).json(allPetsInDB);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});
module.exports = router;
