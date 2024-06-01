const express = require('express');
const router  = express.Router();
const publishModel = require('../models/publicaciones');
const { getPublish, getPublishID, deletePublish } = require('../controllers/publicaciones');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()})
const { uploadFile } = require('../utils/uploadFile.js');

//localhost:3000/api/publicaciones

router.get('/', getPublish);
router.get('/:id', getPublishID);
router.delete('/:id', deletePublish);

router.post('/', upload.fields([{ name: 'image', maxCount: 1 }]), async (req, res) => {
  try {
      const image = req.files.image;
      console.log(image)
      if(image && image.length > 0){
         const {downloadURL} = await uploadFile(image[0]);
         console.log(downloadURL)
         const newPublish = await publishModel.create({
          id_user: req.body.id_user,
          contenido: req.body.contenido,
          image: downloadURL
        })
        await newPublish.save();
        console.log(newPublish)
        return res.status(200).json({newPublish})
      }
  } catch (error) {
      res.status(400).json({ message: "Debes enviar una imagen" });
  }
});


module.exports = router