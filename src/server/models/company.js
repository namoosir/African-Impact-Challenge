const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    administrator: {
        type: Schema.Types.ObjectId,    // Reference to the Entreprenur
        //required: true
    }, 
    employees: [{
        type: Schema.Types.ObjectId,    // References to Entrepreneurs 
    }],
    numEmployees: {
        type: Number,
    },
    lookingFunding: {
        default: false,
        type: Boolean,
    },
    documents: {
        type: [String],
        default: []
    },
    location: String,
    image: String
})

module.exports = mongoose.model("Company", CompanySchema);
