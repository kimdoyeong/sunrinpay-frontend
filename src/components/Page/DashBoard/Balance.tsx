import React from 'react'
import styled from 'styled-components';
import useModalControl from '../../../lib/useModalControl';

const Box = styled.div`
    padding: 1.5em;
    box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.4);
    box-sizing: border-box;
    width: 100%;
    border-radius: 10px;
    & > h3, & > h1 {
        margin: 0;
    }
    & > h3 {
        color: #7b7b7b;
    }
    & > h1 {
        font-size: 2.5rem;
    }
`;
const Button = styled.button`
    all: unset;
    font-size: 1.2rem;
    padding: .5em 1em;
    background: black;
    color: white;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 10px;
    @media (max-width: 640px) {
        width: 100%;
        text-align: center;
    }
`;
interface DashboardBalanceProps {
    name: string
}
function DashboardBalance({ name }: DashboardBalanceProps) {
    const { open } = useModalControl("payment");
    return (
        <Box>
            <h3>{name}님의 지갑</h3>
            <h1>0원</h1>
            <Button onClick={open}>결제</Button>
        </Box>
    );
}

export default DashboardBalance;