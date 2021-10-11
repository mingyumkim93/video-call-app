import { useState, useRef, useEffect } from "react";
import { ButtonGroup, Button } from "@mui/material";
import { Mic, MicOff, Videocam, VideocamOff } from "@mui/icons-material";

function Room() {
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [isMyCameraOn, setIsMyCameraOn] = useState(true);
  const [isMyAudioOn, setIsMyAudioOn] = useState(true);
  const myVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function getMedia() {
      try {
        const userMedia = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setMyStream(userMedia);
        if (myVideo.current) myVideo.current.srcObject = userMedia;
      } catch (e) {}
    }
    getMedia();
  }, []);

  function toggleAudioOn() {
    setIsMyAudioOn(!isMyAudioOn);
    if (myStream) myStream.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
  }

  function toggleCameraOn() {
    setIsMyCameraOn(!isMyCameraOn);
    if (myStream) myStream.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
  }

  return (
    <div>
      <h2>Chat room</h2>
      <video ref={myVideo} width="400" height="300" autoPlay></video>
      <ButtonGroup variant="text" color="inherit">
        <Button value="mic" onClick={toggleAudioOn}>
          {isMyAudioOn ? <Mic /> : <MicOff />}
        </Button>
        <Button value="camera" onClick={toggleCameraOn}>
          {isMyCameraOn ? <Videocam /> : <VideocamOff />}
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Room;
