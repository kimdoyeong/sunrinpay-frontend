import React from 'react'
import styled from 'styled-components';
import ShopItem from './ShopItem';

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2em 0;
    justify-content: center;

    @media screen and (max-width: 640px) {
        padding: 1em 0;
    }
`;
function ShopList() {
    return (
        <List>
            <ShopItem itemName="이호준" price={10000} image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
            <ShopItem itemName="이호준" price={10000} image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
            <ShopItem itemName="이호준" price={10000} image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
            <ShopItem itemName="이호준" price={10000} image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
            <ShopItem itemName="이호준" price={10000} image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
        </List>
    )
}

export default ShopList;