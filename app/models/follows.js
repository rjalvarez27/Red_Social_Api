const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id_usuario:{
        type: String,
        require: [true, 'id de usuario es necesario'],
    },
     id_seguidos: {
        type: String,
        require: [true, 'id de seguidos es necesario'],
        default : 0
    },
    id_seguidores: {
        type: String,
        require: [true, 'id de seguidos es necesario'],
        default : 0
    },
    notificaciones: {
        type: Boolean,
        default: false,
    }
},{  
    timestamps: true,
    versionKey: false
})