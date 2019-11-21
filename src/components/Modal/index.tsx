import React from 'react'
import styled from 'styled-components';
import { spring, Motion } from 'react-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import useModalControl from '../../lib/useModalControl';
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
    margin: 0;
`;
const Contents = styled.div`
    background: white;
    width: 100%;
    max-width: 720px;
    padding: 1em;
    max-height: 70vh;
    overflow-y: auto;
`;
interface ModalProps {
    children: React.ReactNode,
    id: string
}

function Modal({ children, id }: ModalProps) {
    const state = useSelector((state: RootState) => (state.Modal as any)[id]);
    const { close } = useModalControl(id);
    if (!state) return null;

    return (
        <Motion defaultStyle={{ opacity: 0, scale: 1.5 }} style={{ opacity: spring(1), scale: spring(1) }}>
            {({ opacity, scale }: any) => (
                <Background style={{
                    opacity,
                    transform: `scale(${scale})`
                }} onClick={close}>
                    <Contents onClick={e => {
                        e.stopPropagation();
                    }}>
                        {children}
                    </Contents>
                </Background>
            )}
        </Motion>
    )
}

export default Modal;