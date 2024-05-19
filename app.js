require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {dbConection} = require('./config/database.js') 

dbConection();

const port = process.env.PORT || 3000 ;
app.use(cors());
app.use(express.json());
app.use('/social/', require('./app/routes')); 

app.listen(port, ()=>{
   console.log(`LOCALHOST:http://localhost:${port}`)
})

