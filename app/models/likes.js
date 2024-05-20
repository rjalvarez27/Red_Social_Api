const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    id_publication:{
        type: String,
        require: [true, 'Id de publicacion es necesario'],
    }, 
    id_user: {
        type:String,
    },
    like: {
        type: Boolean,
        default: true,
    },
    notifications: {
        type: Boolean,
        default: true,     
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('like', likeSchema)