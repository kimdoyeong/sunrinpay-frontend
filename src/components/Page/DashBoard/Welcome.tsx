import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import DashboardBalance from './Balance';

function DashboardWelcome() {
    const user = useSelector((state: RootState) => state.Auth.user.user);

    if (!user) return null
    const { name } = user;
    return (
        <div>
            <DashboardBalance name={name} />
        </div>
    )
}
export default DashboardWelcome;