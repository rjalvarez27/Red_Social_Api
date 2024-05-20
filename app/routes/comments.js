const express = require('express');
const router  = express.Router();
const multer = require('multer');
const fs = require('fs');

const commentModel = require('../models/comments');
const { getComment, updateComment, deleteComment } = require('../controllers/comments');

router.get('/', getComment);
//router.post('/', newComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

const storage = multer.memoryStorage()
//const upload = multer({ dest: '/app/uploads/' });
const upload = multer({ storage: storage });


router.post('/', upload.array('image', 4), async (req, res) =>{
   
  try {
    images = req.files.map(file => ({
      name: file.originalname,
      data: file.buffer,
      contentType: file.mimetype
    }));

    const newComment = await commentModel.create({
      author: req.body.author,
      content: req.body.content,
      image: images
      
    });

    await newComment.save();
    console.log(images)
    res.send('File enviado' + newComment);
  }catch (err) {
    console.error(err);
    res.sendStatus(err.status);
  }

});

module.exports = router

