import { useRef } from "react";

function Room() {
  const myVideo = useRef<HTMLVideoElement>(null);
  async function getMedia() {
    try {
      const myStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      myVideo.current!.srcObject = myStream;
    } catch (e) {}
  }

  getMedia();
  return (
    <div>
      <h2>Chat room</h2>
      <video ref={myVideo} width="400" height="300" autoPlay></video>
    </div>
  );
}

export default Room;
