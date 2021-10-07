import React, { useEffect } from "react";
import socket from "./socket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import Home from "./pages/Home";
import Room from "./pages/Room";

function App() {
  useEffect(() => {
    socket.emit("test", "test");
  }, []);

  return (
    <Box display="flex" flexDirection="column" height="100vh" alignItems="center" justifyContent="center">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/:id">
            <Room />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
