const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
    //required: true
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  poster: { type: Schema.Types.ObjectId, ref: "User" },
  //user ID
  comments: [
    {
      comment: String,
      user: { type: Schema.Types.ObjectId, ref: "User" }, //
    },
  ],
});

module.exports = mongoose.model("Posts", PostsSchema);
