const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the Entreprenur
    required: true,
  },
  status: {
    type: Boolean, // References to Entrepreneurs
  },
  mark: {
    type: Number,
  },
  moduleId: {
    type: Schema.Types.ObjectId,
    ref: "Modules",
  },
  name: {
    type: String,
  },
  comments: {
    type: String,
  },
  submitted_document: {
    type: String,
  },
  marked_document: {
    type: String,
  },
});

module.exports = mongoose.model("Assignments", AssignmentSchema);
