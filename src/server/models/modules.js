const { object } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModulesSchema = new Schema({
  name: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
  },
  assignments: [
    {
      type: String, //array of assignment document names
    },
  ],
  content: [
    {
      type: String, //array of assignment document names
    },
  ],
  lectures: [
    {
      type: String, //array of assignment document names
    },
  ],
  events: [{
    type: Schema.Types.ObjectId,
    ref: "Events",
    default: [],
  }],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Modules", ModulesSchema);
