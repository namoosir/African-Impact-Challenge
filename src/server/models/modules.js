const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModulesSchema = new Schema({
    name: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    assignments: [{
        type: String, //array of assignment document names
    }],
    content: [{
        type: String, //array of assignment document names
    }],
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Modules", ModulesSchema);
