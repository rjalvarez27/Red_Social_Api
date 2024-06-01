const express = require('express');
const router = express.Router();
const {  getBill, postBill } = require('../controllers/bill.js');

//localhost:3000/social/bill
//Metodos:

router.post('/', postBill) 

module.exports = router
