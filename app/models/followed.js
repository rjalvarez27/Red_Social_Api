const mongoose = require('mongoose');

const followedSchema = new mongoose.Schema({
    id_user:{
        type: String,
        require: [true, 'id de usuario es necesario'],
    },
     id_followed: {
        type: String,
        require: [true, 'id de seguidos es necesario'],
        default : 0
    },
    notifications: {
        type: Boolean,
        default: true,
    }
},{  
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('followed', followedSchema)