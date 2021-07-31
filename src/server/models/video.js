const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  name: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = mongoose.model("Video", VideoSchema);
