const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    administrator: {
        type: Schema.Types.ObjectId,    // Reference to the Entreprenur
    }, 
    employees: [{
        type: Schema.Types.ObjectId,    // References to Entrepreneurs 
    }],
    numEmployees: {
        type: Number,
    },
    biography: {
        type: String,
    },
    lookingFunding: {
        type: Boolean,
    },
    location: String,
    image: String
})

module.exports = mongoose.model("Company", CompanySchema);
