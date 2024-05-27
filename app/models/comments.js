const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: {
        type: String,
        //required: true
    },
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

module.exports = mongoose.model('comments', commentSchema)