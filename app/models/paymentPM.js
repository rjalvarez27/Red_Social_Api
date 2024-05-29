const mongoose = require('mongoose');

const paymentModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ci : {
        type: String,
        required: true,
        unique: true
    },
    bank: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    } 
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('pay', paymentModel)