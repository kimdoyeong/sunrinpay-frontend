import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import QRReader from "react-qr-reader";
import recieveOnlineData from "../../../lib/api/recieveOnlineData";
import PaymentData from "./PaymentData";

const GlobalStyle = createGlobalStyle`
    * {
        justify-content:center;
        align-items:center;
        text-align:center;
    }
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: 900;
`;

export default class QRPayment extends Component {
  state = {
    tokenValue: null,
    productsArray: [Object]
  };
  handleError = () => {
    alert("스캔 중 에러가 발생했습니다.");
  };

  handleScan = async (data: any) => {
    if (data) {
      const productData = await recieveOnlineData(data);
      let dataArray = this.state.productsArray;
      dataArray.push(productData);
      this.setState({
        productsArray: dataArray
      });
      return;
    }
    return;
  };

  handleRedirectHome = () => {
    window.location.replace("/");
  };

  render() {
    const isAdmin = (
      <div>
        <Title>QR 코드를 읽혀주세요.</Title>

        <QRReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "50vh" }}
        />
        {this.state.productsArray.reverse().map((data: any) => {
          return <PaymentData title={data.productName} amount={data.amount} />;
        })}
      </div>
    );
    const returnHome = (
      <div>
        <>{this.handleRedirectHome}</>
      </div>
    );
    return (
      <div>
        <GlobalStyle />
        {isAdmin}
      </div>
    );
  }
}
