import React, { useState } from 'react'
import Modal from '..'
import Input, { InputWrap } from '../../Form/Input';
import { useSelector } from 'react-redux'
import handlePayment from '../../../lib/api/store/handlePayment';
import { RootState } from '../../../store/reducer';
import useModalControl from '../../../lib/useModalControl';
import Button from '../../Form/Button';

function CodePaymentModalContents() {
    const [code, setCode] = useState('');
    const [price, setPrice] = useState('');
    const { token } = useSelector((state: RootState) => state.Auth.token);
    const { close } = useModalControl('code');

    function onsubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!token) return;
        handlePayment("CODE", code, parseInt(price.replace(/,/g, ''), 10), token)
            .then(() => {
                alert('완료!');
                setPrice('');
                setCode('')
                close();
            })
            .catch(e => {
                alert(e.message);
            })
    }

    return (
        <form onSubmit={onsubmit}>
            <InputWrap>
                <span>코드 입력</span>
                <Input type="text" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} />
            </InputWrap>
            <InputWrap>
                <span>결제 금액 입력</span>
                <Input type="text" onChange={e => {
                    const t = e.target.value.replace(/,/g, '');
                    if (!t.match(/^[0-9]*$/)) return;
                    setPrice(t.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                }} value={price} />
            </InputWrap>
            <Button>결제</Button>
        </form>
    )
}
function CodePaymentModal() {

    return (
        <Modal id="code">
            <CodePaymentModalContents />
        </Modal>
    )
};

export default CodePaymentModal;