const express = require('express');
const router  = express.Router();

const {createfollows, getfollows, followDelete} = require('../controllers/follows');

//localhost:3000/api/follows
//Metodos:


router.post('/', createfollows)

router.get('/:id', getfollows)

router.delete('/:id', followDelete)