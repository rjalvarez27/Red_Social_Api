const express = require('express');
const router  = express.Router();

const { getComment, newComment, updateComment, deleteComment } = require('../controllers/comments');

router.get('/', getComment);
router.post('/', newComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

module.exports = router