import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

socket.on("welcome", () => console.log("someone joined"));
export default socket;
