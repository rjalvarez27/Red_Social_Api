require ('dotenv').config();
const {dbConection} = require('./config/database.js'); 
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const {Server : SocketServer } = require("socket.io");
const http = require("http");


dbConection();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/social/', require('./app/routes')); 
const server = http.createServer(app);
const io = new SocketServer(server,{
   cors: {
      origin: 'http://localhost:5173'
   }
});

io.on("connection", (socket) => {
   console.log(`User connected: ${socket.id}`);
  
   socket.on('message', (data) => {
      console.log(data)
      socket.broadcast.emit('message', data);
})
});

server.listen(port, ()=>{
   console.log(`LOCALHOST:http://localhost:${port}`)
})


