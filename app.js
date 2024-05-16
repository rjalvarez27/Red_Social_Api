require ('dotenv').config();
const {dbConnect} = require('./config/mongo.js'); 
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const cors = require('cors');
dbConnect();

const upload = multer({ dest: '/app/uploads/' });

app.post('/images', upload.array('photos', 4), (req, res) =>{
   req.files.map(saveImage);
   res.send('images uploaded');
});

function saveImage(file) {
   const newPath = `./app/uploads/${file.originalname}`;
   fs.renameSync(file.path, newPath);
   return newPath;
};

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/', require('./app/routes'));

app.listen(port, ()=>{
   console.log(`LOCALHOST:http://localhost:${port}`)
})
