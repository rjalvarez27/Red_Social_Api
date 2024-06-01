const express = require('express');
const router = express.Router();
const {  getBill, postBill } = require('../controllers/bill.js');

//localhost:3000/social/bill
//Metodos:

router.post('/:email', postBill) 

module.exports = router
