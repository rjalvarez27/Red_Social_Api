const express = require('express');
const avatarModel = require('../models/avatar');
const router = express.Router();
const { getAvatar, avatarPatch, avatarDelete} = require('../controllers/avatar');
const multer = require('multer');

//localhost:3000/api/avatar

router.get('/:id', getAvatar)
router.patch('/:id', avatarPatch)
router.delete('/:id', avatarDelete)

router.post('/', multer().single('avatar'), async (req, res) => {
    try {
        images = req.files.map(file => ({
            name: file.originalname,
            data: file.buffer,
            contentType: file.mimetype
          }));
        const newPublish = await avatarModel .create({
            id_user: req.body.id_user,
            content: req.body.content,
            avatar: images    
          });
        await newPublish.save();
        console.log(images)
        res.send('File enviado' + newPublish);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  });



module.exports = router