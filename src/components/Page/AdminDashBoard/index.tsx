import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
    h1.title {
        font-size: 3rem;
        margin-top: 0;
        margin-bottom: 1rem;
    }
`;
function AdminDashBoard() {
    return (
        <Wrap>
            <h1 className="title">Admin Page</h1>
        </Wrap>
    )
}

export default AdminDashBoard;