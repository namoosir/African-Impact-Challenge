const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartnerSchema = new Schema({
    company: {
        type: String,       // Could also have his company in the database (another option) and have a reference to it
        //required: true
    },
    role: {
        type: String,       // What type of partner? (Investor, etc...)
    },
    image: String,          // url of image (profile)
    biography: String
})

module.exports = mongoose.model('Partner', PartnerSchema);