const multer = require('multer'); //permite subir imagenes

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'app/uploads/')
    },
    filename: function (req, file, cb) {
        const newPath = `./app/uploads/${file.originalname}`;
        fs.renameSync(file.path, newPath);
        return newPath;
    }
    
})

const upload = multer({ storage: storage })

module.exports = upload 



