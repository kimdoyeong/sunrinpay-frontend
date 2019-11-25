import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import DashboardWelcome from '../DashBoard';
import AdminDashBoard from '.';

const Wrap = styled.div`
    .tabs {
        display: flex;
        margin-bottom: .5em;
    }
`;
const Tab = styled.div<{ selected?: boolean }>`
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    margin: 0 .2em;
    padding: .5em 1em;
    background: #eaeaea;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 1s, color 1s;
    ${(props) => props.selected && css`background: black; color: white;`}
`;
type TabKind = "admin" | "pay";
function AdminDashboardTap() {
    const [tab, setTab] = useState<TabKind>("pay");
    function onSetTab(tab: TabKind) {
        return () => setTab(tab);
    }
    return (
        <Wrap>
            <div className="tabs">
                <Tab role="tab" onClick={onSetTab("pay")} selected={tab === 'pay'}>
                    페이
                </Tab>
                <Tab role="tab" onClick={onSetTab("admin")} selected={tab === 'admin'}>
                    관리자
                </Tab>
            </div>
            <div className="contents">
                {tab === 'pay' ? <DashboardWelcome /> : <AdminDashBoard />}
            </div>
        </Wrap>
    )

}

export default AdminDashboardTap;