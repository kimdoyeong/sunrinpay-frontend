import React from 'react'
import Container from '../../components/Layout/Container';
import Input, { InputWrap } from '../../components/Form/Input';
import { Link } from 'react-router-dom'
import Button from '../../components/Form/Button';
import SEO from '../../components/SEO';

function LoginPage() {
    return (
        <Container>
            <SEO />
            <div style={{ maxWidth: 640, margin: '0 auto', padding: '1em' }}>
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
                    <Button>로그인</Button>
                    <p>
                        아이디가 없으신가요? <Link to="signup">계정 만들기</Link>
                    </p>
                </form>
            </div>
        </Container>
    )
}

export default LoginPage;