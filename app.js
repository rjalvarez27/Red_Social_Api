require ('dotenv').config();
const {dbConection} = require('./config/database.js'); 
const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

dbConection();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/social/', require('./app/routes')); 

app.listen(port, ()=>{
   console.log(`LOCALHOST:http://localhost:${port}`)
})


