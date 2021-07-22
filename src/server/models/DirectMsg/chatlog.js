const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatLogSchema = new Schema({
    user1: {
        type: Schema.Types.ObjectId,    // Foregin Key to Users
    }, 
    user2: [{
        type: Schema.Types.ObjectId,     // Foregin Key to Users
    }],
    user1Logs: {
        type: [Schema.Types.ObjectId],   // Foregin Key to Msg
    },
    user2Logs: {
        type: [Schema.Types.ObjectId],    // Foregin Key to Msg
    }
})

module.exports = mongoose.model("ChatLog", ChatLogSchema);
