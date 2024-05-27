const express = require('express');
const router = express.Router();
const {  getRecovery, postRecovery } = require('../controllers/recovery.js');

//localhost:3000/social/recovery
//Metodos:

router.get('/:code',  getRecovery) 

router.post('/:email', postRecovery) 

module.exports = router
