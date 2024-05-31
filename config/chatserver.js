// Socket io
const express = require("express");
const socketIo = require("socket.io");
const io = socketIo(server);
const http = require('http');
const messageRoutes = require("./routes/messages");

const {dbConection} = require('./config/database.js');


const app = express();
const server = http.createServer(app);

dbConection();
app.use(
    cors({
      origin: ["http://localhost:3000", "http://localhost:5173"],
      credentials: true,
    })
  );

/*const io = new Server(httpServer, {
    cors: {
      origin: 'http://localhost:3000',
      methods:['GET','POST']
    }
  })*/

app.use("/social/messages", messageRoutes);

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });

    socket.on("message", async (message) => {
        
        const db = await dbConection();
        await db.collection("messages").insertOne({ text: message});
        io.emit("message", message);
    });

    socket.on("typing", (isTyping) => {
        socket.broadcast.emit("typing", isTyping);
    });

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on("leave_room", (data) => {
        socket.leave(data);
        console.log(`User with ID: ${socket.id} left room: ${data}`);
    });
});

server.listen(3000, ()=>{
    console.log('Server running on port 3000');
});
