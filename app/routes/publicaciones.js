const express = require('express');
const router  = express.Router();
const multer = require('multer');

const publishModel = require('../models/publicaciones');

const { getPublish, updatePublish, deletePublish } = require('../controllers/publicaciones');

const storage = multer.memoryStorage()
//const upload = multer({ dest: '/app/uploads/' });
const upload = multer({ storage: storage });

router.get('/', getPublish);
router.put('/:id', updatePublish);
router.delete('/:id', deletePublish);

router.post('/', upload.array('image', 4), async (req, res) =>{
   
    try {
      images = req.files.map(file => ({
        name: file.originalname,
        data: file.buffer,
        contentType: file.mimetype
      }));
  
      const newPublish = await publishModel.create({
        author: req.body.author,
        content: req.body.content,
        image: images
        
      });
  
      await newPublish.save();
      console.log(images)
      res.send('File enviado' + newPublish);
    }catch (err) {
      console.error(err);
      res.sendStatus(err.status);
    }
  
  });

module.exports = router