import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > h1.code {
        font-size: 3rem;
        font-weight: bold;
        background: black;
        color: white;
        padding: 0 1em;
    }
    & > * {
        margin: 0;
    }
`;

function CodePayment() {
    const { code } = useSelector((state: RootState) => ({ ...state.Payment.qr }));
    if (!code) return null;
    return (
        <Wrap>
            <h3>또는</h3>
            <h1 className="code">
                {code}
            </h1>
        </Wrap>
    )
}

export default CodePayment;