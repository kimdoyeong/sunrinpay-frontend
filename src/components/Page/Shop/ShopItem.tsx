import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
    margin: 1rem;
    width: 300px;
    box-sizing: border-box;
    box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.2);
    .image-wrap {
        img {
            display: block;
            width: 100%;
            height: 200px;
            object-fit: cover;
            object-position: center;
        }
    }
    .contents {
        padding: 1em;
        h1 {
            margin: 0;
            margin-bottom: .5rem;
            word-break: normal;
        }
        .price {
            color: #777;
            font-size: 1.2em;
        }
    }

    @media screen and (max-width: 640px) {
        width: 120px;
        font-size: 10px;
        margin: 5px;
        .image-wrap img {
            height: 100px;
        }
    }
`;

interface ShopItemProps {
    itemName: string,
    price: number,
    image: string;
}
function ShopItem({ itemName, price, image }: ShopItemProps) {
    return (
        <Wrap>
            <div className="image-wrap">
                <img src={image} alt={`${itemName} Item`} />
            </div>
            <div className="contents">
                <h1>{itemName}</h1>
                <div className="price">
                    {price}원
                </div>
            </div>
        </Wrap>
    )
}

export default ShopItem;