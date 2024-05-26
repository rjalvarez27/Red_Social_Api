const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
        // max-lenght:
    },
    image: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('publicaciones', postSchema)