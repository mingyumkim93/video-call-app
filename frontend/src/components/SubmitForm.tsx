import React from "react";
import { Button, ButtonGroup } from "@mui/material";

interface SubmitFormProps {
  setIsUserInRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

function SubmitForm({ setIsUserInRoom }: SubmitFormProps) {
  function handleCreate() {
    setIsUserInRoom(true);
  }
  function handleJoin() {
    setIsUserInRoom(true);
  }
  return (
    <div>
      submit form
      <ButtonGroup>
        <Button onClick={handleCreate}>Create</Button>
        <Button onClick={handleJoin}>Join</Button>
      </ButtonGroup>
    </div>
  );
}

export default SubmitForm;
