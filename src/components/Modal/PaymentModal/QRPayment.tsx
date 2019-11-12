import React from 'react'
import styled from 'styled-components';
import MethodChangeButton from './MethodChangeButton';

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
`;

interface QRPaymentProps {
    setToCode(): any
}
function QRPayment({ setToCode }: QRPaymentProps) {
    return (
        <Wrap>
            <h1>아래 QR 코드를 스캔하세요.</h1>
            <div>
                <img className="qr" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="QR Code" />
            </div>
            <div className="or">
                또는, <MethodChangeButton role="button" onClick={setToCode}>코드 직접 입력하기</MethodChangeButton>
            </div>
        </Wrap>
    )
}

export default QRPayment;