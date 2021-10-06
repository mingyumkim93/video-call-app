import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import axios from "axios";

function App() {
  const socket = new WebSocket(`ws://localhost:5000`);
  socket.addEventListener("open", () => {
    console.log("connected to server");
  });
  socket.addEventListener("message", (message) => {
    console.log(message);
  });
  // axios.get("/api/test").then((res) => console.log(res));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
