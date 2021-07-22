const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MsgSchema = new Schema({
    msg: {
        type: String,      
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Msg', MsgSchema);