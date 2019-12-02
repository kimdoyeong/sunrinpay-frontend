import React, { useState, useEffect } from "react";
import Modal from "..";
import Camera from "./Camera";
import Input, { InputWrap } from "../../Form/Input";
import Button from "../../Form/Button";
import { useSelector } from 'react-redux'
import { RootState } from "../../../store/reducer";
import handlePayment from "../../../lib/api/store/handlePayment";
import useModalControl from "../../../lib/useModalControl";
function RecognizePaymentModal() {
  const [url, setURL] = useState<string | undefined>();
  const [price, setPrice] = useState('');
  const [handle, setHandle] = useState(false);
  const { token } = useSelector((state: RootState) => state.Auth.token);
  const { close } = useModalControl('recognize');
  useEffect(() => {
    if (!handle || !url || !token) return;

    handlePayment("QR", url, parseInt(price.replace(/,/g, ''), 10), token)
      .then(() => {
        alert("완료!");
        setURL(undefined);
        setPrice('');
        setHandle(false);

        close();
      })
      .catch((e) => {
        alert(e.message);
        setURL(undefined);
        setPrice('');
        setHandle(false);
      });
  }, [handle, close, price, token, url]);
  function recognized(url: string) {
    setURL(url)
  }
  function onPriceSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!price) {
      alert("값을 입력해주세요.");
      return;
    }
    setHandle(true);
  }
  const jsx = handle ? <div>처리 중입니다...</div> : (
    <>
      <h1>QR 인식</h1>
      {!url && <Camera cb={recognized} />}
      {
        url && <form onSubmit={onPriceSubmit}>
          <InputWrap>
            <span>결제 금액을 입력해주세요</span>
            <Input type="text" onChange={e => {
              const t = e.target.value.replace(/,/g, '');
              if (!t.match(/^[0-9]*$/)) return;
              setPrice(t.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            }} value={price} />

          </InputWrap>
          <Button>확인</Button>
        </form>
      }
    </>
  )
  return (
    <Modal id="recognize">
      {jsx}
    </Modal>
  );
}

export default RecognizePaymentModal;
