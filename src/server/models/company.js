const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    administrator: [{
        type: Schema.Types.ObjectId,    // Reference to the Entreprenur
        required: true
    }], 
    employees: [{
        type: Schema.Types.ObjectId,    // References to Entrepreneurs 
        required: true
    }],
    numEmployees: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    lookingFunding: {
        type: Boolean,
        required: true
    },
    location: String,
    image: String
})

module.exports = mongoose.model("Company", CompanySchema);