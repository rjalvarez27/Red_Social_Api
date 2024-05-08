const express = require('express');
const router  = express.Router();

const { login }= require('../controllers/login');

//localhost:3000/api/login
//metodos:

router.post('/',login) 

module.exports = router
