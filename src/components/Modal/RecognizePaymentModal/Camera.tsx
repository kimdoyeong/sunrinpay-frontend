import React, { useState, useEffect, useRef } from "react";

function Camera() {
  const [cantUse, setCantUse] = useState(false);
  const [stream, setStream] = useState<MediaStream | undefined>();
  const video = useRef<HTMLVideoElement>();

  //init
  useEffect(() => {
    console.log(!navigator.mediaDevices);
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
      setCantUse(true);

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        setStream(stream);
      })
      .catch(e => {
        console.error(e);
        setCantUse(true);
      });

  }, []);

  //stream
  useEffect(() => {
    if (!stream || !video.current) return;
    const v = video.current;
    v.srcObject = stream;
    v.play();
  }, [stream, video]);

  if (cantUse) return <div>카메라를 사용할 수 없습니다.</div>;
  if (!stream) return <div>카메라를 활성화 해주세요.</div>;
  return (
    <>
      <video ref={video as any}></video>
    </>
  );
}
export default Camera;
