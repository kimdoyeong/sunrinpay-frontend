import React from "react";
import Button from "../../Form/Button";
import useModalControl from "../../../lib/useModalControl";
import RecognizePaymentModal from "../../Modal/RecognizePaymentModal";
import styled from 'styled-components';
import CodePaymentModal from "../../Modal/CodePaymentModal";

const Wrap = styled.div`
  button {
    margin: 1em 0;
  }
`;

function StoreDashboard() {
  const qr = useModalControl("recognize");
  const code = useModalControl('code');
  return (
    <Wrap>
      <RecognizePaymentModal />
      <CodePaymentModal />
      <h1>대시보드</h1>
      <Button onClick={qr.open}>QR코드 인식</Button>
      <Button onClick={code.open}>코드 입력</Button>
    </Wrap>
  );
}

export default StoreDashboard;
