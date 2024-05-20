const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
   id_usuario:{
       type: String,
       require: [true, 'id de usuario es necesario'],
   },
    avatar: {
        type: Array,
        require: [true, 'Ingrese imagen de perfil'],
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('avatar', avatarSchema)