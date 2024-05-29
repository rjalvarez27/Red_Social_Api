const express = require('express');
const router  = express.Router();
const multer = require('multer');
const fs = require('fs');

const { postMessages, getMessages, deleteMessages} = require('../controllers/message.js');


router.post('/', postMessages)
router.get('/', getMessages)
router.delete('/:id', deleteMessages)

module.exports = router