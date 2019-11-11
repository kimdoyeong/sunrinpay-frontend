import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducer';
import { getUserData } from '../store/Auth/user';

interface GetDataWrapProps {
    children: React.ReactNode
}

function GetDataWrap({ children }: GetDataWrapProps) {
    const { logined, updated, failed } = useSelector((state: RootState) => ({
        logined: state.Auth.token.logined,
        updated: state.Auth.user.updated,
        failed: state.Auth.user.fail
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        if (!logined) return;
        if (!updated || updated.getTime() > Date.now() + (1000 * 60 * 3)) { // 갱신주기 3분
            dispatch(getUserData());
        }
    }, [logined, updated, dispatch])

    if (failed) {
        return null;
    }
    return children as any;
}

export default GetDataWrap;