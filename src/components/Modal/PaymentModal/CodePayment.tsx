import React from 'react'
import styled from 'styled-components';
import MethodChangeButton from './MethodChangeButton';
import Input from '../../Form/Input';

const Wrap = styled.div`
    & > .code {
        font-size: 2rem;
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding-left: 0;
        padding-right: 0;
        max-width: 640px;
    }
    & > .or {
        margin-top: 15px;
    }
`;

interface CodePaymentProps {
    setToCode(): any
}
function CodePayment({setToCode}: CodePaymentProps) {
    return (
        <Wrap>
            <h1>코드 입력</h1>
            <Input type="text" className="code" placeholder="결제 코드" />
            <div className="or">
                또는, <MethodChangeButton role="button" onClick={setToCode}>QR 코드로 결제</MethodChangeButton>
            </div>
        </Wrap>
    )
}

export default CodePayment;