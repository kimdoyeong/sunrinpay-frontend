import React from 'react'
import styled from 'styled-components';
import ShopItem from './ShopItem';
import getOnlineStoreData from '../../../lib/api/getOnlineStoreData'

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2em 0;
    justify-content: center;

    @media screen and (max-width: 640px) {
        padding: 1em 0;
    }
`;

class Shoplist extends React.Component{
    state = {
        shopData : []
    }
    
    async componentDidMount(){
        const onlineStoreData = await getOnlineStoreData();
        this.setState({
            shopData : onlineStoreData.data
        })

        console.log(this.state.shopData)
    }


    render(){
        return (
            <List>
                {this.state.shopData.map((data:any)=>{
                    return <ShopItem itemName={data.title} price={data.cost} image={data.img}/>
                })}
            </List>
        )
    }
}


export default Shoplist;