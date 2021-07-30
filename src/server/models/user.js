const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    //required: true
  },
  password: {
    type: String,
  },
  typeOfUser: {
    type: String, //Entrepreneur, Partner
    required: true,
  },
  image: {
    type: String, // Url of image
    default: "default.jpeg"
  },
  biography: {
    type: String,
    default: "",
  },
  typeUser: {
    type: Schema.Types.ObjectId,
  },
  events: [{
    type: Schema.Types.ObjectId,
    ref: "Events",
    default: [],
  }],
});

module.exports = mongoose.model("User", UserSchema);
