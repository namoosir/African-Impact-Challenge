const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    userid: {
        type: Schema.Types.ObjectId,    // Reference to the Entreprenur
        required : true
    }, 
    status: {
        type: String,    // References to Entrepreneurs 
    },
    mark: {
        type: Number,
    },
    name:{
        type:String
    },
    comments: {
        type: String,
    },
    submitted_document: {
        type: String,
    },  
    marked_document:{
        type: String,
    },
})
// CreateAssignment, getAssignment, updateAssignment, Savesubmitted_document, save marked_document, get all assignment by userid, get all assignments only in progress
// add name get assignment by name
module.exports = mongoose.model("Assignments", AssignmentSchema);
