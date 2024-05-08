const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, 'El nombre es necesario'],
        minLength: 3
    },
    username: {
        type: String,
        require: [true, 'El username es necesario'],
        minLength: 4
    },
    email: {
        type:String,
        unique: true,
        require: [true, 'El correo es necesario'],
        trim: true 
    },
    rol: {
        type: String,
        required: true,
        default: 'user',
        minLength: 4,
        maxLength: 5
    },
    password: {
        type:String,
        require: true
    },
    premium : {
        type: Boolean,
        default: false
    },   
    avatar : {
        type: String
    } 
},{
    timestamps: true,
    versionKey: false
})

UserSchema.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt).then(hashPassword =>{
        return hashPassword;
    })
}

UserSchema.statics.comparePassword = async (password, hashPassword) =>{
    return await bcrypt.compare(password, hashPassword)
}

module.exports = mongoose.model('User', UserSchema)