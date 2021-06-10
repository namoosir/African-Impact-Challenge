const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
    email: {
        type: String
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