import React from 'react'
import styled from 'styled-components';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5em;
    box-sizing: border-box;
`;
const Contents = styled.div`
    background: white;
    width: 100%;
    max-width: 720px;
    padding: 1em;
`;
interface ModalProps {
    children: React.ReactNode
}

function Modal({ children }: ModalProps) {
    return (
        <Background>
            <Contents>{children}</Contents>
        </Background>
    )
}

export default Modal;