const express = require('express');
const avatarModel = require('../models/avatar');
const router = express.Router();
const { getAvatar,  avatarDelete} = require('../controllers/avatar');
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

//localhost:3000/api/avatar

router.get('/:id', getAvatar)
router.delete('/:id', avatarDelete)
router.post('/', upload.array('avatar', 1), async (req, res) => {

    try {
        images = req.files.map(file => ({
            name: file.originalname,
            data: file.buffer,
            contentType: file.mimetype
          }));
        const newPublish = await avatarModel .create({
            id_user: req.body.id_user,
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