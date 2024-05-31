const express = require('express');
const avatarModel = require('../models/avatar');
const router = express.Router();
const { getAvatar,  avatarDelete} = require('../controllers/avatar');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()})
const { uploadFile } = require('../utils/uploadFile.js');

//localhost:3000/api/avatar

router.get('/:id', getAvatar)
router.delete('/:id', avatarDelete)
router.post('/', upload.fields([{ name: 'avatar', maxCount: 1 }]), async (req, res) => {
    try {
        const image = req.files.avatar;
        console.log(image)
        if(image && image.length > 0){
           const {downloadURL} = await uploadFile(image[0]);
           console.log(downloadURL)

           const newPublish = await avatarModel.create({
            id_user: req.body.id_user,
            avatar: downloadURL
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