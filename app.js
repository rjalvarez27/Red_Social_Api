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

// Socket io

const {Server} = require('socket.io');
const bodyParser = require('body-parser');
const http = require('http');

const server = http.createServer(app);

const io = new Server(server, {cors:{origin:'*'}});
 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());