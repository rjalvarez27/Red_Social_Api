const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id_publicacion:{
        type: String,
        require: [true, 'Id de publicacion es necesario'],
    }, 
    id_usuario: {
        type:String,
    },
    like: {
        type: Boolean,
        default: true,
    },
    notificaciones: {
        type: Boolean,
        default: true,     
    }
},{
    timestamps: true,
    versionKey: false
})