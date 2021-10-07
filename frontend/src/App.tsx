import React, { useEffect } from "react";
import socket from "./socket";

function App() {
  useEffect(() => {
    socket.emit("test", "test");
  }, []);

  return (
    <div className="App">
      <div>app</div>
    </div>
  );
}

export default App;
