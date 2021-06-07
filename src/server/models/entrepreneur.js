const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrepreneurSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, 
    company: {
        type: String,
        required: true
    },
    location: String,
    age: Number,
    biography: String,
    image: String
});

mongoose.exports = mongoose.model("Entrepreneur", EntrepreneurSchema, 'users');

