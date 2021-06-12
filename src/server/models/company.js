const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    administrator: {
        type: Schema.Types.ObjectId,    // Reference to the Entreprenur
        required: true
    }, 
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
    documents: [String],
    location: String,
    image: String
})

module.exports = mongoose.model("Company", CompanySchema);