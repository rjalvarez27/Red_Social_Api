const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
        // max-lenght:
    },
    image: {
        type: Array
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('publicaciones', postSchema)