import React from 'react'
import styled from 'styled-components';
import Button from '../../Form/Button';

const Wrap = styled.div`
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.4);
    padding: 1.5em;
    width: 100%;
    & > .go {
        width: fit-content;
    }
    @media (max-width: 640px) {
        & > .go {
            width: 100%;   
        }
    }
`;
function DashboardGoStore() {
    return (
        <Wrap>
            <h1>온라인 매점</h1>
            <Button className="go">바로가기</Button>
        </Wrap>
    )
}
export default DashboardGoStore;