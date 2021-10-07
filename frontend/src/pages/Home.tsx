import { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";

function Home() {
  const [nickname, setNickname] = useState("");
  const [roomName, setRoomName] = useState("");

  function handleCreate() {
    console.log(nickname, roomName);
  }

  function handleJoin() {
    console.log(nickname, roomName);
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
      <Button onClick={handleCreate}>create</Button>
      <Button onClick={handleJoin}>join</Button>
    </Box>
  );
}

export default Home;
