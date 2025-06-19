const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  name: String,
  age: Number,
  isGood: Boolean,
  owner: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const PetModel = model("pet", petSchema);
module.exports = PetModel;
