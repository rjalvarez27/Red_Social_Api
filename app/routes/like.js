const express = require('express');
const router = express.Router();
const { createLikes, getlikes, getlikeUser, likeDelete } = require('../controllers/likes.js');

//localhost:3000/api/like
//Metodos:

router.post('/', createLikes)

router.get('/', getlikes)

router.get('/:id', getlikeUser)

router.delete('/:id', likeDelete)

module.exports = router