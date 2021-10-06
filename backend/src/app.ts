import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
  socket.send("hi");
});
app.get("/api/test", (req, res) => res.send("hello"));

server.listen(5000);
