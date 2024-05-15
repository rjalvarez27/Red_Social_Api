const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
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
    } /* PENSAR EN COMO SE VAN A IDENTIFICAR LOS COMENTARIOS */
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('comments', commentSchema)