require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {dbConnect} = require('./config/mongo.js'); 

dbConnect();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/', require('./app/routes'));

app.listen(port, ()=>{
   console.log(`LOCALHOST:http://localhost:${port}`)
})