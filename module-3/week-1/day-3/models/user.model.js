const { Schema, model } = require("mongoose");

//user schema
const userSchema = new Schema({
  username: {
    //specifies the type as a string
    type: String,
    //makes the username required
    required: true,
    //makes the username have to unique
    unique: true,
    //minimum length of username is 4
    minLength: 4,
    //remove extra white space from the front and back
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  pets: {
    type: [Schema.Types.ObjectId],
    ref: "pet",
  },
  profileImage: {
    type: String,
    default:
      "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  group: {
    type: String,
    enum: ["IT", "Manager", "Teacher", "Student"],
    default: "Student",
  },
});

//create a model
const UserModel = model("user", userSchema);
//always export the model for other pages
module.exports = UserModel;
