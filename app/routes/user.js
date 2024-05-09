const express = require('express');
const router  = express.Router();

const { getUsers, getUser, userPatch, userDelete, createUser }= require('../controllers/user.js');
const { validationR } = require('../middleware/validaciones.js')
//localhost:3000/api/user

//Metodos:

router.get('/', getUsers) 

router.get('/:id', getUser) 

router.post('/', validationR, createUser)

router.patch('/:id', userPatch)

router.delete('/:id',userDelete)

module.exports = router
