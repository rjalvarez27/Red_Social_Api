const mongoose = require('mongoose');

const paymentModel = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    references: {
        type: String,
        required: true
    },
    image: {
        type: Buffer
    } // USAR STRIPE/ banco crystaldisk
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('pagos', paymentModel)