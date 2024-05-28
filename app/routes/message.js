const express = require('express');
const router  = express.Router();
const multer = require('multer');
const fs = require('fs');

const MessageSchema = require('../models/message');
const { getMessages } = require('../controllers/message');


router.get('/', getMessages);

/*router.post('/', );
const postMessages = async (req, res) => {
    const message = new MessageSchema({
        message: req.body.message,
        from: req.body.from
    })
    
    console.log(message)
    message.save((error, messageStored) =>{
        if(error || !messageStored){
            return res.status(404).send({
                status: 'error',
                message: 'No ha sido posible guardar el mensaje'
            })
        }
        return res.status(200).send({
            status: 'success',
            messageStored
        })

    })
};*/



module.exports = router