import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Room from "./components/Room";
import SubmitForm from "./components/SubmitForm";

function App() {
  const [isUserInRoom, setIsUserInRoom] = useState(false);

  return (
    <Box display="flex" flexDirection="column" height="100vh" alignItems="center" justifyContent="center">
      {isUserInRoom && <Room />}
      {!isUserInRoom && <SubmitForm setIsUserInRoom={setIsUserInRoom} />}
    </Box>
  );
}

export default App;
