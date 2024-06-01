const express = require('express');
const router  = express.Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()})
const { uploadFile } = require('../utils/uploadFile.js');

const commentModel = require('../models/comments');
const { getComment , getCommentID, deleteComment } = require('../controllers/comments');

router.get('/', getComment);
router.get('/:id', getCommentID);
router.delete('/:id', deleteComment);

router.post('/', upload.fields([{ name: 'image', maxCount: 1 }]), async (req, res) => {
  try {
      const image = req.files.image;
      console.log(image)
      if(image && image.length > 0){
         const {downloadURL} = await uploadFile(image[0]);
         console.log(downloadURL)
         const newPublish = await commentModel.create({
          content: req.body.content,
          image: downloadURL
        })  
        await newPublish.save();
        console.log(newPublish)
        return res.status(200).json({newPublish})
      }
      else{
        const newPublish = await commentModel.create({
        content: req.body.content})
        await newPublish.save();
        console.log(newPublish)
        return res.status(200).json({newPublish})
      }
  } catch (error) {
      res.status(400).json({ message: "Debes enviar una imagen" });
  }
});


module.exports = router

