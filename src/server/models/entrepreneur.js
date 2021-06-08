const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrepreneurSchema = new Schema({
    company: String,
    location: String,
    age: Number,
    biography: String,
    image: String
});

mongoose.exports = mongoose.model("Entrepreneur", EntrepreneurSchema);

