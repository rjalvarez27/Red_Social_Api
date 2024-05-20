const multer = require('multer'); //permite subir imagenes
const upload = multer().single('avatar') //permite subir solo una imagen


const uploadImage = (req, res, next) => {

    upload(req, res, function (err) {
        if (err) {
            return res.status(500).json({ message: err.message })
        }
        next()
    })

}

module.exports = {uploadImage}