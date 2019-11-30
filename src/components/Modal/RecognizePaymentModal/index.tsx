import React from "react";
import Modal from "..";
import Camera from "./Camera";

function RecognizePaymentModal() {
  return (
    <Modal id="recognize">
      <h1>QR 인식</h1>
      <Camera />
    </Modal>
  );
}

export default RecognizePaymentModal;
