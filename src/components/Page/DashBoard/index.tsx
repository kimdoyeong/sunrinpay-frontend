import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import DashboardBalance from './Balance';
import DashboardRecentPayment from './RecentPayment';
import PaymentModal from '../../Modal/PaymentModal';
import DashboardGoStore from './Store';

const Wrap = styled.div`
    & > * {
        margin-bottom: 40px;
    }
`;
const Flex = styled.div`
    display: flex;
    & > * {
        margin: 0 1em;
    }

    @media (max-width: 640px) {
        display: block;
        & > * {
            margin: 30px 0;
        }
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
                <Flex>
                    <DashboardBalance name={name} />
                    <DashboardGoStore />
                </Flex>
                <DashboardRecentPayment />
            </Wrap>
        </>
    )
}
export default DashboardWelcome;