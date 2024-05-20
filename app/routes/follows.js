const express = require('express');
const router = express.Router();
const {createfollows, getfollows, followDeletSeguidos, followDeletSeguidores} = require('../controllers/follows');

//localhost:3000/api/follows
//Metodos:
router.post('/', createfollows)
router.get('/:id', getfollows)
router.delete('/:id_seguidos', followDeletSeguidos)
router.delete('/:id_seguidores', followDeletSeguidores)

module.exports = router