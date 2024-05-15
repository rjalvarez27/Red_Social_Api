const express = require('express');
const router  = express.Router();

const { getPublish, newPublish, updatePublish, deletePublish } = require('../controllers/publicaciones');

router.get('/', getPublish);
router.post('/', newPublish);
router.put('/:id', updatePublish);
router.delete('/:id', deletePublish);

module.exports = router