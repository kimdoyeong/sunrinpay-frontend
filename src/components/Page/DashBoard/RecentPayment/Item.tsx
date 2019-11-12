import React, { useMemo } from 'react'
import styled from 'styled-components';

const Item = styled.div`
    padding: 1em 2em;
    box-sizing: border-box;
    display: flex;
    font-size: 1.3rem;

    & > .store {
        & > h3 {
            margin: 0;
            font-weight: bold;
        }
        flex: 1;
    }
    & > .payment {
        flex: 0;
    }
`;
interface RecentPaymentItemProps {
    store: string;
    payment: number | string;
    date: Date;
}
function RecentPaymentItem({ store, payment, date }: RecentPaymentItemProps) {
    const price = useMemo(() => {
        return payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }, [payment]);
    const datetime = useMemo(() => {
        const current = new Date();
        const gap = current.getTime() - date.getTime();

        if (gap < 1000 * 60) {
            return "방금 전";
        } else if (gap < 1000 * 60 * 60) {
            return `${Math.ceil(gap / (1000 * 60))}분 전`;
        } else if (gap < 1000 * 60 * 60 * 24) {
            return `${Math.ceil(gap / (1000 * 60 * 60))}시간 전`;
        } else if (gap < 1000 * 60 * 60 * 24 * 7) {
            return `${Math.ceil(gap / (1000 * 60 * 60 * 24))}일 전`;
        }
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    }, [date]);
    return (
        <Item>
            <div className="store">
                <h3>{store}</h3>
                <p>{datetime}</p>
            </div>
            <div className="payment">
                {price}원
            </div>
        </Item>
    )
}

export default RecentPaymentItem;