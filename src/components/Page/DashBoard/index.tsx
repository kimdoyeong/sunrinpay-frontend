import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import DashboardBalance from './Balance';
import DashboardRecentPayment from './RecentPayment';
import PaymentModal from '../../Modal/PaymentModal';

const Wrap = styled.div`
    & > * {
        margin-bottom: 40px;
    }
`;
function DashboardWelcome() {
    const user = useSelector((state: RootState) => state.Auth.user.user);

    if (!user) return null
    const { name } = user;
    return (
        <>
            <PaymentModal />

            <Wrap>
                <DashboardBalance name={name} />
                <DashboardRecentPayment />
            </Wrap>
        </>
    )
}
export default DashboardWelcome;