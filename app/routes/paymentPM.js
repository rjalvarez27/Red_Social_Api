const express = require('express');
const router  =  express.Router();

const { getPayment } = require('../controllers/paymentPM');

router.get('/', getPayment);

module.exports = router