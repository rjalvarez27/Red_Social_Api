const express = require('express');
const router = express.Router();
const {createAvatar, getAvatar, avatarPatch, avatarDelete} = require('../controllers/avatar');

//localhost:3000/api/follows
//Metodos:
router.post('/', createAvatar)
router.get('/:id', getAvatar)
router.patch('/:id', avatarPatch)
router.delete('/:id', avatarDelete)

module.exports = router