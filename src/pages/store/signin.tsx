import React, { useState, useCallback } from "react";
import Container from "../../components/Layout/Container";
import SEO from "../../components/SEO";
import Input, { InputWrap } from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Link } from "react-router-dom";
function StoreSignIn() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function onFormChange(setter: (data: string) => void) {
    return (e: React.ChangeEvent) => {
      setter((e.target as any).value);
    };
  }
  return (
    <Container>
      <SEO title="스토어 로그인" />
      <h1>스토어 로그인</h1>
      <form>
        <InputWrap>
          <span>아이디</span>
          <Input type="text" onChange={onFormChange(setId)} value={id} />
        </InputWrap>
        <InputWrap>
          <span>비밀번호</span>
          <Input type="password" onChange={onFormChange(setPw)} value={pw} />
        </InputWrap>
        <Button>로그인</Button>
        <p>
          또는, <Link to="/store/signup">스토어 가입하기</Link>
        </p>
      </form>
    </Container>
  );
}

export default StoreSignIn;
