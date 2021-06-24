const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        //required: true
    },
    password:{
        type: String,
    },
    typeOfUser: {
        type: String, //Entrepreneur, Partner
        required: true
    },
    typeUser: {
        type: Schema.Types.ObjectId,
    }
})

module.exports = mongoose.model("User", UserSchema);