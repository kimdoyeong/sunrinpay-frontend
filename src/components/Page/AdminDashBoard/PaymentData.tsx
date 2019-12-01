import React, { Component } from "react";

export default class PaymentData extends Component<any> {
  render() {
    return (
      <div style={{ margin: "1rem", marginBottom: "4rem" }}>
        <div style={{ fontSize: "4rem", fontWeight: 900 }}>
          상품명 : {this.props.title}
        </div>
        <div style={{ fontSize: "2rem" }}>개수 : {this.props.amount}</div>
      </div>
    );
  }
}
