const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id_user: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('publicaciones', postSchema)