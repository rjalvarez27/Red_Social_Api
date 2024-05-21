const express = require('express');
const router = express.Router();
const {createfollowers, getfollowers, deletFollowers} = require('../controllers/followers');

//localhost:3000/api/follows
//Metodos:
router.post('/', createfollowers)
router.get('/:id', getfollowers) // Id_user 
router.delete('/:id', deletFollowers) // id_followers

module.exports = router

