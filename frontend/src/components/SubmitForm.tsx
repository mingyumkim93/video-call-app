import React, { useState, useMemo } from "react";
import { Button, TextField, Stack, Box } from "@mui/material";

interface SubmitFormProps {
  setIsUserInRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

function SubmitForm({ setIsUserInRoom }: SubmitFormProps) {
  const [nickname, setNickname] = useState("");
  const [roomName, setRoomName] = useState("");
  const isInvaliedInput = useMemo(() => {
    return nickname.length === 0 || roomName.length === 0;
  }, [nickname, roomName]);

  function handleCreate() {
    // send inputs to server
    // server check if the room name exist
    // if not, this user's socket joins the room and setIsUserInRoom true
    // if yes, notify this user that the room is already exist
    clearInputs();
  }

  function handleJoin() {
    //send inputs to server
    // server check if the room name exist
    // if not, notify this user that the room is not exist
    // if yes, server checks if the room is full
    // if yes, notify this user that the room is full
    // if not, this user's socket joins the room and setInUserInRoom ture
    // proceed with WebRTC connecting for both users in the room
    setIsUserInRoom(true);
    clearInputs();
  }

  function clearInputs() {
    setNickname("");
    setRoomName("");
  }

  return (
    <Stack spacing={2}>
      <h4>Video call</h4>
      <p>Create or join a room</p>
      <TextField
        id="nickName"
        label="Nickname"
        variant="outlined"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <TextField
        id="roomName"
        label="Room name"
        variant="outlined"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />

      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" onClick={handleCreate} disabled={isInvaliedInput}>
          Create
        </Button>
        <Button variant="contained" onClick={handleJoin} disabled={isInvaliedInput}>
          Join
        </Button>
      </Box>
    </Stack>
  );
}

export default SubmitForm;
