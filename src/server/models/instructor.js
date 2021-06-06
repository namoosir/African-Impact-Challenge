const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, 
    username: {
        type: String,
        required: true
    }, 
    classes: [{
        type: String,
    }],
    image: {
        type: String                // Url of image
    },
    biography: String
})

module.exports = mongoose.model("Instructor", InstructorSchema);