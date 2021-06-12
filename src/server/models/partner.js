const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartnerSchema = new Schema({
    role: {
        type: String,       // What type of partner? (Investor, etc...)
    },
    image: String,          // url of image (profile)
})

module.exports = mongoose.model('Partner', PartnerSchema);