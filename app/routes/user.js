const express = require('express');
const router  = express.Router();

const { getUsers, getUser, userPatch, userDelete, createUser }= require('../controllers/user.js');
const { validateR  } = require('../middleware/validaciones');

//localhost:3000/api/user
//Metodos:

router.get('/', getUsers) 

router.get('/:id', getUser) 

router.post('/', validateR , createUser)

router.patch('/:id', userPatch)

router.delete('/:id',userDelete)

module.exports = router
