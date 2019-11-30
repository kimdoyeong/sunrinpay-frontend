import React, { useState, useCallback } from "react";
import Container from "../../components/Layout/Container";
import SEO from "../../components/SEO";
import Input, { InputWrap } from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ErrorComponent from "../../components/Form/ErrorComponent";
import { SignIn } from "../../lib/api/store";
import { setToken } from "../../store/Auth/token";
function StoreSignIn() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState<any>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  function onFormChange(setter: (data: string) => void) {
    return (e: React.ChangeEvent) => {
      setter((e.target as any).value);
    };
  }
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!id || !pw) {
        alert("아이디와 비밀번호를 입력해 주세요.");
        return;
      }
      SignIn(id, pw)
        .then(token => {
          dispatch(setToken(token as any, "STORE"));
          history.push("/dashboard");
        })
        .catch(e => {
          setError(e.message);
        });
    },
    [dispatch, id, pw, history]
  );
  return (
    <Container>
      <SEO title="스토어 로그인" />
      <h1>스토어 로그인</h1>
      {error && <ErrorComponent>{error}</ErrorComponent>}
      <form onSubmit={onSubmit}>
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
