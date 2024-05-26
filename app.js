require ('dotenv').config();
const {dbConnect} = require('./config/mongo.js'); 
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const cors = require('cors');

const {dbConection} = require('./config/database.js') 
dbConnection();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/social/', require('./app/routes')); 

app.listen(port, ()=>{
   console.log(`LOCALHOST:http://localhost:${port}`)
})
