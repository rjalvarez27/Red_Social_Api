const express = require('express');
const router  =  express.Router();
const paymentModel = require('../models/paymentPM');
const { getPayment, getPaymentId, patchPayment, deletePayment, createPayment } = require('../controllers/paymentPM');




router.get('/', getPayment);

router.get('/:id', getPaymentId);

router.patch('/:id', patchPayment);

router.delete('/:id', deletePayment);

router.post('/', createPayment);

module.exports = router

