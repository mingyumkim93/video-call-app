import React, { useState, useEffect, useRef, useCallback } from "react";
import { ButtonGroup, Button } from "@mui/material";
import { Mic, MicOff, Videocam, VideocamOff, VideoCameraFront, VideoCameraBack } from "@mui/icons-material";

function Room() {
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [isMyCameraOn, setIsMyCameraOn] = useState(true);
  const [isMyAudioOn, setIsMyAudioOn] = useState(true);
  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [isSelfie, SetIsSelfie] = useState(true);
  const myVideo = useRef<HTMLVideoElement>(null);

  const getMedia = useCallback(async (isSelfie: boolean) => {
    const constraints: MediaStreamConstraints = {
      audio: true,
      video: isSelfie ? { facingMode: "user" } : { facingMode: { exact: "environment" } }
    };

    try {
      const userMedia = await navigator.mediaDevices.getUserMedia(constraints);
      setMyStream(userMedia);
      if (myVideo.current) myVideo.current.srcObject = userMedia;
    } catch (e) {}
  }, []);

  const getCameras = useCallback(async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cameras = devices.filter((device) => device.kind === "videoinput");
      setCameras(cameras);
    } catch (e) {}
  }, []);

  useEffect(() => {
    getMedia(true);
    getCameras();
  }, [getMedia, getCameras]);

  function toggleAudioOn() {
    setIsMyAudioOn(!isMyAudioOn);
    if (myStream) myStream.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
  }

  function toggleCameraOn() {
    setIsMyCameraOn(!isMyCameraOn);
    if (myStream) myStream.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
  }

  function changeCamera() {
    getMedia(!isSelfie);
    SetIsSelfie(!isSelfie);
  }

  return (
    <>
      <video ref={myVideo} width="400" height="300" autoPlay></video>
      <ButtonGroup variant="text" color="inherit">
        <Button value="mic" onClick={toggleAudioOn}>
          {isMyAudioOn ? <Mic /> : <MicOff />}
        </Button>
        <Button value="camera" onClick={toggleCameraOn}>
          {isMyCameraOn ? <Videocam /> : <VideocamOff />}
        </Button>
        {cameras.length > 1 && (
          <Button onClick={changeCamera}> {isSelfie ? <VideoCameraFront /> : <VideoCameraBack />}</Button>
        )}
      </ButtonGroup>
    </>
  );
}

export default Room;
