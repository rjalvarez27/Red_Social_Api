const express = require('express');
const router = express.Router();
const { login }= require('../controllers/login');
const { validateLogin } = require('../middleware/validaciones');

//localhost:3000/social/login
//metodos:

router.post('/', validateLogin,login) 

module.exports = router
