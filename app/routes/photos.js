const express = require('express');
const upload = require('../middleware/uploadImage');
const router  = express.Router();

router.post('/', upload.array('images', 4))

module.exports = router