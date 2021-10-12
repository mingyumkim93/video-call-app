import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  socket.on("join_room", (roomName) => {
    socket.join(roomName);
    console.log(socket.id + " joined room", roomName);
    socket.to(roomName).emit("welcome");
  });
});

httpServer.listen(5000);
