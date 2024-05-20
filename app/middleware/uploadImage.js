const multer = require('multer'); //permite subir imagenes
const upload = multer().single('avatar') //permite subir solo una imagen


const uploadImage = (req, res, next) => {
    const {id_usuario, avatar} = req.body; 

}

module.exports = {uploadImage}