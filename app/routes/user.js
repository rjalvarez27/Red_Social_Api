const express = require('express');
const router = express.Router();
const { getUsers, getUser, userPatch, userDelete, createUser, userPatchPassword}= require('../controllers/user.js');
const { validateR  } = require('../middleware/validaciones');
const {verifyToken } = require('../middleware/token.js')

//localhost:3000/social/user
//Metodos:


router.get('/', verifyToken, getUsers) 

router.get('/:id', getUser) 

router.post('/', validateR , createUser)

router.patch('/:id', userPatch)

router.delete('/:id',userDelete)

router.patch('/password/:id', userPatchPassword)

module.exports = router
