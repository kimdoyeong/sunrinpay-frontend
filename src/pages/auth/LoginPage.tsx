import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Container from "../../components/Layout/Container";
import Input, { InputWrap } from "../../components/Form/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Form/Button";
import SEO from "../../components/SEO";
import { RootState } from "../../store/reducer";
import { SignInChange, SignInFormSubmit } from "../../store/Form/SignIn";
import useFormChange from "../../lib/useFormChange";
import ErrorComponent from "../../components/Form/ErrorComponent";
import RedirectIfLogined from "../../components/special/RedirectIfLogined";

function LoginPage() {
  const { id, password, progress, success, error } = useSelector(
    (state: RootState) => state.Form.SignIn
  );
  const changeHandler = useFormChange(SignInChange);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (success) {
      history.push("/dashboard");
    }
  }, [success, history]);
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(SignInFormSubmit());
    },
    [dispatch]
  );

  return (
    <Container>
      <RedirectIfLogined />
      <SEO />
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "1em" }}>
        {error && <ErrorComponent>{error}</ErrorComponent>}
        <h1>로그인</h1>
        <form onSubmit={onSubmit}>
          <InputWrap>
            <span>아이디</span>
            <Input value={id} onChange={changeHandler("id")} />
          </InputWrap>
          <InputWrap>
            <span>비밀번호</span>
            <Input
              type="password"
              value={password}
              onChange={changeHandler("password")}
            />
          </InputWrap>
          <Button disabled={progress}>
            {progress ? "처리 중..." : "로그인"}
          </Button>
          <p>
            아이디가 없으신가요? <Link to="signup">계정 만들기</Link> /{" "}
            <Link to="/store/signin">스토어 로그인</Link>
          </p>
        </form>
      </div>
    </Container>
  );
}

export default LoginPage;
