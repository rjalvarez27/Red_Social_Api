const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        minLength: 3
    },
    username: {
        type: String,
        minLength: 4,
        unique: true
    },
    email: {
        type:String,
        unique: true,
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



module.exports = mongoose.model('user', UserSchema)