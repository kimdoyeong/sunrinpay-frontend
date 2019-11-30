import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { paymentQRRequest } from "../../../store/Payment";
import { RootState } from "../../../store/reducer";
import ErrorComponent from "../../Form/ErrorComponent";
import QRCode from "qrcode";

const Wrap = styled.div`
  text-align: center;
  & img.qr {
    width: 100%;
    max-width: 500px;
    display: block;
    margin: 0 auto;
  }
  & > .or {
    margin-top: 15px;
  }
  & > .sub {
    color: #7a7a7a;
  }
`;

function QRPayment() {
  const dispatch = useDispatch();
  const [QRImage, setQRImage] = useState<string>("");
  const { success, error, token, modal } = useSelector((state: RootState) => ({
    ...state.Payment.qr,
    modal: state.Modal.payment
  }));
  useEffect(() => {
    if (!modal) return;
    dispatch(paymentQRRequest());
  }, [dispatch, modal]);
  useEffect(() => {
    if (!token) return;
    QRCode.toDataURL(token, {
      width: 500
    })
      .then(val => {
        setQRImage(val);
      })
      .catch(e => {
        alert(e.message);
      });
  }, [token]);
  if (error) {
    return (
      <ErrorComponent>
        <strong>에러!</strong> {error}
      </ErrorComponent>
    );
  }
  if (!success) {
    return <div>로드 중...</div>;
  }
  return (
    <Wrap>
      <h1>아래 QR 코드를 스캔하세요.</h1>
      <div>
        <img className="qr" src={QRImage} alt="Payment QR Code" />
      </div>
      <p className="sub">QR 코드는 5분간만 유효합니다.</p>
    </Wrap>
  );
}

export default QRPayment;
