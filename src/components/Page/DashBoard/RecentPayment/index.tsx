import React, { useState, useEffect } from 'react'
import RecentPaymentItem from './Item'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducer';
import getTransactions from '../../../../lib/api/getTransactions';

type DataType = ({
    _id: string,
    store: {
        _id: string,
        name: string,
    },
    at: number,
    sum: number
})[]
function DashboardRecentPayment() {
    const { user, token } = useSelector((state: RootState) => ({ user: state.Auth.user.user, token: state.Auth.token.token }));
    const [data, setData] = useState<DataType | undefined>();
    useEffect(() => {
        if (!user || !token) return;
        getTransactions(user._id, token)
            .then(data => {
                setData(data);
            })
            .catch(e => {
                alert(e);
            })
    }, [user, token])
    if (!data) return <div>로드 중...</div>
    return (
        <div>
            <h1>최근 결제 내역</h1>
            <div>
                {data.map((d) => <RecentPaymentItem key={d._id} store={d.store.name} payment={d.sum} date={new Date(d.at)} />)}
            </div>
        </div>
    )
}

export default DashboardRecentPayment;