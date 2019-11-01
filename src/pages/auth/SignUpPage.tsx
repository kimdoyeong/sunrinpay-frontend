import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Container from '../../components/Layout/Container';
import SEO from '../../components/SEO';
import Input, { InputWrap } from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import useFormChange from '../../lib/useFormChange';
import { SignUpChange, SignUpFormSubmit } from '../../store/Form/SignUp';
import { RootState } from '../../store/reducer';

function SignUpPage() {
    const { id, name, no, password, passwordAccept, progress, success } = useSelector((state: RootState) => state.Form.SignUp);
    const changeHandler = useFormChange(SignUpChange);
    const dispatch = useDispatch();
    const history = useHistory();

    const onsubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        dispatch(SignUpFormSubmit());
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            history.push('/');
        }
    }, [success, history]);
    return (
        <Container>
            <SEO title="회원가입" />
            <h1>회원가입</h1>
            <form onSubmit={onsubmit}>
                <InputWrap>
                    <span>아이디</span>
                    <Input type="text" value={id} onChange={changeHandler("id")} />
                </InputWrap>
                <InputWrap>
                    <span>비밀번호</span>
                    <Input type="password" value={password} onChange={changeHandler("password")} />
                </InputWrap>
                <InputWrap>
                    <span>비밀번호 확인</span>
                    <Input type="password" value={passwordAccept} onChange={changeHandler("passwordAccept")} />
                </InputWrap>
                <InputWrap>
                    <span>학번</span>
                    <Input type="number" value={no} onChange={changeHandler("no")} />
                </InputWrap>
                <InputWrap>
                    <span>이름</span>
                    <Input type="text" value={name} onChange={changeHandler("name")} />
                </InputWrap>
                <Button disabled={progress}>{!progress ? "회원가입" : "처리 중..."}</Button>
            </form>
        </Container>
    );
}

export default SignUpPage;