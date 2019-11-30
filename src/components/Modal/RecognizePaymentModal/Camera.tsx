import React, { useState, useEffect, useRef, useCallback } from "react";
import QrCode from 'qrcode-reader';

interface CameraProps {
  cb(url: string): any
}
function Camera({ cb }: CameraProps) {
  const [cantUse, setCantUse] = useState(false);
  const [stream, setStream] = useState<MediaStream | undefined>();
  const [qrdata, setQRData] = useState<any>();
  const video = useRef<HTMLVideoElement>();
  const capture = useCallback(() => {
    if (!video.current || !stream) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = video.current.clientWidth;
    canvas.height = video.current.clientHeight;

    if (!ctx) return;

    ctx.drawImage(video.current, 0, 0);
    const qr = new QrCode();

    qr.decode(canvas.toDataURL('image/png'));
    qr.callback = function (error: any, result: any) {
      if (error) {
        console.error(error);
        setQRData(false);
        return;
      }
      cb(result.result)

    }

  }, [video, stream, cb]);

  //init
  useEffect(() => {
    if (navigator.mediaDevices === undefined) {
      (navigator as any).mediaDevices = {};
    }
    if (navigator.mediaDevices.getUserMedia === undefined) {
      (navigator.mediaDevices.getUserMedia as any) = function () {
        const getUserMedia = (navigator as any).webkitGetUserMedia || (navigator as any).mozGetUserMedia;

        if (!getUserMedia) {
          setCantUse(true);
          return;
        }
        return new Promise((resolve, reject) => {
          getUserMedia.call(navigator, { video: { facingMode: 'environment' } }, resolve, reject);
        })
      };
    }

    let str: MediaStream | null = null;
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        setStream(stream);
        str = stream;
      })
      .catch(e => {
        console.error(e);
        setCantUse(true);
      });

    return () => {
      if (!str) return;
      str.getTracks().forEach(track => {
        track.stop();
      })
    }
  }, []);

  //stream
  useEffect(() => {
    if (!stream || !video.current) return;
    const v = video.current;
    v.srcObject = stream;
    v.play();

    const id = setInterval(capture, 1000);
    return () => {
      clearInterval(id);
    }
  }, [stream, video, capture]);

  if (cantUse) return <div>카메라를 사용할 수 없습니다.</div>;
  if (!stream) return <div>카메라를 활성화 해주세요.</div>;
  return (
    <>
      <video ref={video as any} playsInline />
      {qrdata === false && <div>QR을 찾을 수 없습니다.</div>}
    </>
  );
}
export default Camera;
