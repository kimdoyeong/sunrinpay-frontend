import React from 'react'
import styled from 'styled-components';
import Button from '../../Form/Button';

const Wrap = styled.div`
    display: flex;
    .image {
        max-width: 400px;
        padding: 1em;
        box-sizing: border-box;
        flex: 0;
    }
    .product {
        flex: 1;
        padding: 1em;
        h1 {
            margin-top: 0;
        }
        h3 {
            color: #7a7a7a;
            margin-top: 0;
        }
        .buttons {
            display: flex;
            width: fit-content;
            * {
                white-space: nowrap;
                margin-right: .3em;
            }
            .buy {
                background: #e6a800;
            }
        }
    }
`;
interface ShopProductProps {
    title: string,
    price: number
}
function ShopProduct({ title, price }: ShopProductProps) {
    return (
        <Wrap>
            <div className="image">
                <img src="http://nasaro.kr/data/item/5424/thumb-64K06rCA66eb7Iqk7YOA_280x280.jpg" alt={`${title} product`} />
            </div>
            <div className="product">
                <h1>{title}</h1>
                <h3>{price}원</h3>
                <div className="buttons">
                    <Button className="buy">구입하기</Button>
                    <Button>장바구니 추가</Button>
                </div>
            </div>
        </Wrap>
    )
}

export default ShopProduct;