const express = require('express');
const router = express.Router();
const { createLikes, getlikes, getlikeUser, likeDelete } = require('../controllers/likes.js');

//localhost:3000/api/like
//Metodos:

router.post('/', createLikes)

router.get('/', getlikes)

router.get('/:id_publication', getlikeUser)

router.delete('/:id_publication', likeDelete)

module.exports = router