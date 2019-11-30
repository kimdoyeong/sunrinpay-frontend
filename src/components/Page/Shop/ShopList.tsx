import React from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";
import getOnlineStoreData from "../../../lib/api/getOnlineStoreData";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em 0;
  justify-content: center;

  @media screen and (max-width: 640px) {
    padding: 1em 0;
  }
`;

const ListWrapper = styled.div`
  text-decoration: none;
  color: black;
`;

class Shoplist extends React.Component {
  state = {
    shopData: []
  };

  async componentWillMount() {
    const onlineStoreData = await getOnlineStoreData();
    this.setState({
      shopData: onlineStoreData.data
    });
  }

  render() {
    return (
      <List>
        {this.state.shopData.map((data: any, idx: number) => {
          return (
            <ListWrapper>
              <a href={"/shop/" + data.title} style={{ color: "black" }}>
                <ShopItem
                  itemName={data.title}
                  price={data.cost}
                  image={data.img}
                />
              </a>
            </ListWrapper>
          );
        })}
      </List>
    );
  }
}

export default Shoplist;
