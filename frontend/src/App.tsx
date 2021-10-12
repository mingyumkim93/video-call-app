import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import Home from "./pages/Home";
import Room from "./pages/Room";

function App() {
  //TODO: consider having central state management
  const [nickname, setNickname] = useState("");

  return (
    <Box display="flex" flexDirection="column" height="100vh" alignItems="center" justifyContent="center">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home nickname={nickname} setNickname={setNickname} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/:roomName">
            <Room />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
