import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import Modal from '.';

function PaymentModal() {
    const payment = useSelector((state: RootState) => state.Modal.payment);

    if (!payment) return null;

    return (
        <Modal>
            <h1>Payment Modal</h1>
        </Modal>
    )
}

export default PaymentModal;