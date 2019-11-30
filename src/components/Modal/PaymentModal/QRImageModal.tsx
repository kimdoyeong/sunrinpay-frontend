import React from "react";
import Modal from "../index";
import QRCreate from "./QRCreate";

function QRImageModal(token: any) {
  return (
    <Modal id="qrcreate">
      <QRCreate token={token} />
    </Modal>
  );
}

export default QRImageModal;
