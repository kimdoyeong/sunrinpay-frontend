import React, { useState } from 'react'
import Modal from '../index';
import QRPayment from './QRPayment';
import CodePayment from './CodePayment';

function PaymentModal() {
    const [method, setMethod] = useState<"QR" | "CODE">("QR");
    return (
        <Modal id="payment">
            {
                method === 'QR' ?
                    (
                        <QRPayment setToCode={() => {
                            setMethod("CODE");
                        }} />
                    )
                    :
                    <CodePayment setToCode={() => {
                        setMethod("QR");
                    }} />
            }
        </Modal>
    )
}

export default PaymentModal;