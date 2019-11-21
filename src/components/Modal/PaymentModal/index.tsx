import React from 'react'
import Modal from '../index';
import QRPayment from './QRPayment';
import CodePayment from './CodePayment';

function PaymentModal() {
    return (
        <Modal id="payment">
            <QRPayment />
            <CodePayment />
        </Modal>
    )
}

export default PaymentModal;