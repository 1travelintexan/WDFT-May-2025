const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  petName: String,
  petAge: Number,
  petType: {
    type: String,
    enum: ["Dog", "Cat", "Bird", "other"],
  },
  //here is the relationship to the users collection
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

//pet model
const PetModel = model("pet", petSchema);
module.exports = PetModel;
