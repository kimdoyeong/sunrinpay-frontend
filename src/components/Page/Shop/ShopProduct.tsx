import React from "react";
import styled from "styled-components";
import Button from "../../Form/Button";
import buyProduct from "../../../lib/api/buyProduct";

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
        margin-right: 0.3em;
      }
      .buy {
        background: #e6a800;
      }
    }
  }
`;
interface ShopProductProps {
  title: string;
  price: number;
  image: string;
}
interface Props {
  title: string;
  price: number;
  image: string;
}

class ShopProduct extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  BuyProduct = async () => {
    const token = await buyProduct(
      sessionStorage.getItem("auth_token") || "token",
      this.props.title,
      1
    );
  };

  render() {
    return (
      <Wrap>
        <div className="image">
          <img src={this.props.image} alt={`${this.props.title} product`} />
        </div>
        <div className="product">
          <h1>{this.props.title}</h1>
          <h3>{this.props.price}원</h3>
          <div className="buttons">
            <Button className="buy" onClick={this.BuyProduct}>
              구입하기
            </Button>
            <Button>장바구니 추가</Button>
          </div>
        </div>
      </Wrap>
    );
  }
}

// function ShopProduct({ title, price, image }: ShopProductProps) {}

export default ShopProduct;
