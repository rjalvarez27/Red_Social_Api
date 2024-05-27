const express = require('express');
const router  =  express.Router();
const multer = require('multer');

const paymentModel = require('../models/paymentPM');
const { getPayment } = require('../controllers/paymentPM');

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

router.get('/', getPayment);

router.post('/', upload.array('comprobante', 1), async (req, res) =>{
   
    try {
      images = req.files.map(file => ({
        name: file.originalname,
        data: file.buffer,
        contentType: file.mimetype
      }));
  
      const newPayment = await paymentModel.create({
        username: req.body.username,
        email: req.body.email,
        references: req.body.references,
        comprobante: images
        
      });
  
      await newPayment.save();
      console.log(images)
      res.send('File enviado' + newPayment);
    }catch (err) {
      console.error(err);
      res.sendStatus(err.status);
    }
  
  });

module.exports = router

