const express = require('express');
const router = express.Router();
const {createfollowed, getfollowed, deletFollowed } = require('../controllers/followed');

//localhost:3000/api/followed
//Metodos:
router.post('/', createfollowed)
router.get('/:id', getfollowed) // Id_user 
router.delete('/:id', deletFollowed) // id_followed

module.exports = router

