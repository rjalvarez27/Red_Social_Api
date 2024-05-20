const express = require('express');
const router = express.Router();
const {createAvatar, getAvatar, avatarPatch, avatarDelete} = require('../controllers/avatar');


//localhost:3000/api/avatar

router.post('/', createAvatar)
router.get('/:id', getAvatar)
router.patch('/:id', avatarPatch)
router.delete('/:id', avatarDelete)

module.exports = router