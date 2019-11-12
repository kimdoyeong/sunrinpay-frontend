import React from 'react'
import RecentPaymentItem from './Item'

function DashboardRecentPayment() {
    return (
        <div>
            <h1>최근 결제 내역</h1>
            <div>
                <RecentPaymentItem store="EDCAN" payment={3500} date={new Date("2019-11-11 14:28:00")} />
            </div>
        </div>
    )
}

export default DashboardRecentPayment;