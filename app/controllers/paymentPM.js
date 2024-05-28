const paymentModel = require('../models/paymentPM');

const getPayment = async (req, res) => {
    const payment = await paymentModel.find();
    res.status(200).json(payment);
}

module.exports = { getPayment }