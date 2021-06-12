const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrepreneurSchema = new Schema({
    company: {
        type: String,    // Reference to the Entreprenur
        required: true
    }, 
    location: String,
    age: Number,
    image: String,
    biography: String
})

module.exports = mongoose.model("Entrepreneur", EntrepreneurSchema);

