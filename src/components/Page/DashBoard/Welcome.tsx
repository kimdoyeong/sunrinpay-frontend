import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

function DashboardWelcome() {
    const user = useSelector((state: RootState) => state.Auth.user.user);

    if (!user) return null
    const { name } = user;
    return (
        <div>
            <h1>{name}님 환영합니다.</h1>
        </div>
    )
}
export default DashboardWelcome;