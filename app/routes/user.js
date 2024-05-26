const express = require('express');
const router = express.Router();
const { getUsers, getUser, userPatch, userDelete, createUser, getRecovery }= require('../controllers/user.js');
const { validateR  } = require('../middleware/validaciones');
const {verifyToken } = require('../middleware/token.js')

//localhost:3000/social/user
//Metodos:

router.get('/', verifyToken, getUsers) 

router.get('/:id', getUser) 

router.get('/recovery/:email', getRecovery)

router.post('/', validateR , createUser)

router.patch('/:id', userPatch)

router.delete('/:id',userDelete)

module.exports = router
