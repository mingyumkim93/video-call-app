import React, { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import socket from "../socket";
import { useHistory } from "react-router-dom";

interface HomeProps {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}
function Home({ nickname, setNickname }: HomeProps) {
  const [roomName, setRoomName] = useState("");
  const history = useHistory();

  function validateInputs() {
    return nickname.length > 0 && roomName.length > 0;
  }

  function handleJoin() {
    socket.emit("join_room", roomName);
    history.push(`/${roomName}`);
  }

  return (
    <Box component="form" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <TextField
        id="nickname-input"
        label="Nickname"
        variant="standard"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <TextField
        id="roomname-input"
        label="Room name"
        variant="standard"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <Button onClick={handleJoin} disabled={!validateInputs()}>
        join
      </Button>
    </Box>
  );
}

export default Home;
