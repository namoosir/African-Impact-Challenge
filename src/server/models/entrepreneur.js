const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrepreneurSchema = new Schema({
    email: String,
    company: String,
    location: String,
    age: Number,
    biography: String,
    image: String
});

module.exports = mongoose.model("Entrepreneur", EntrepreneurSchema);

