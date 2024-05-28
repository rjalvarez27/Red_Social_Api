const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        require: [true, 'El mensaje es necesario'],
    },
    from: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('messages', MessageSchema)