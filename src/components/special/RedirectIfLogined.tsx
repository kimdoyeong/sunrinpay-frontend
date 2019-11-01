import React from 'react'
import { Redirect } from 'react-router-dom'
import useLogin from '../../lib/useLogin';

function RedirectIfLogined() {
    const login = useLogin();
    if (!login) {
        return null;
    }
    return <Redirect to="/dashboard" />
}

export default RedirectIfLogined;