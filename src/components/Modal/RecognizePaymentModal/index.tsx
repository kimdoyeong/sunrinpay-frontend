import React, { useState } from "react";
import Modal from "..";
import Camera from "./Camera";

function RecognizePaymentModal() {
  const [url, setURL] = useState<string | undefined>();
  function recognized(url: string) {
    setURL(url)
  }
  return (
    <Modal id="recognize">
      <h1>QR 인식</h1>
      {!url && <Camera cb={recognized} />}
      {url && <div>결제 처리중...</div>}
    </Modal>
  );
}

export default RecognizePaymentModal;
