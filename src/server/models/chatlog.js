const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatLogSchema = new Schema({
    user1:{
        type: Schema.Types.ObjectId,
    },
    user2:{
        type: Schema.Types.ObjectId,
    },
    usersid:{
        type: String,
    },
    chatlogs:[{
        messege :   {type : String, default : ''},
        date :      {type : Date, default :Date.now},
        userid:     {type: Schema.Types.ObjectId},
    }],
})

module.exports = mongoose.model("ChatLog", ChatLogSchema);
// you send 2 users, user and a message (create if does not exist)