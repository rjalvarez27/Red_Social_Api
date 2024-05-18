const express = require('express');
const router  = express.Router();

const { createLikes, getlikes, getlikeUser, likeDelete } = require('../controllers/likes.js');

//localhost:3000/api/like
//Metodos:

roter.post('/', createLikes)

roter.get('/', getlikes)

roter.get('/:id', getlikeUser)

roter.delete('/:id', likeDelete)
