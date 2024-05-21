const express = require('express');
const router = express.Router();
const {createfollows, getfollows,followedDelet, followersDelet } = require('../controllers/follows');

//localhost:3000/api/follows
//Metodos:
router.post('/', createfollows)
router.get('/:id', getfollows) // Id_user 
router.delete('/:id', followedDelet) // id_followed
router.delete('/:id', followersDelet) // id_followers 

module.exports = router

