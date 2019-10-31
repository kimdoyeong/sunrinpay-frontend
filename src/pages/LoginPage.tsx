import React from 'react'
import Container from '../components/Layout/Container';
import Input, { InputWrap } from '../components/Form/Input';

function LoginPage() {
    return (
        <Container>
            <h1>로그인</h1>
            <form>
                <InputWrap>
                    <span>아이디</span>
                    <Input />
                </InputWrap>
                <InputWrap>
                    <span>비밀번호</span>
                    <Input type="password" />
                </InputWrap>
            </form>
        </Container>
    )
}

export default LoginPage;