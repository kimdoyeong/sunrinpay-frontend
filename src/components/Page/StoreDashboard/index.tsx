import React from "react";
import Button from "../../Form/Button";
import useModalControl from "../../../lib/useModalControl";
import RecognizePaymentModal from "../../Modal/RecognizePaymentModal";

function StoreDashboard() {
  const { open } = useModalControl("recognize");
  return (
    <>
      <RecognizePaymentModal />
      <h1>대시보드</h1>
      <Button onClick={open}>QR코드 인식</Button>
    </>
  );
}

export default StoreDashboard;
