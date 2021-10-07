import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("new connection from browser");
  socket.on("test", (message) => console.log(message));
});

httpServer.listen(5000);
