const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartnerSchema = new Schema({
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
    company: {
        type: String,       // Could also have his company in the database (another option) and have a reference to it
        required: true
    },
    role: {
        type: String,       // What type of partner? (Investor, etc...)
        required: true
    },
    image: String,          // url of image (profile)

})

module.exports = mongoose.model('Partner', PartnerSchema, 'users');