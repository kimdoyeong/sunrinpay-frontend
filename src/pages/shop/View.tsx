import React, { useState, useEffect, Component } from "react";
import { withRouter, RouteComponentProps, Router } from "react-router-dom";
import ShopProduct from "../../components/Page/Shop/ShopProduct";
import { getOnlineStoreProductData } from "../../lib/api/getOnlineStoreData";

class ShopViewPage extends Component {
  constructor(props: any) {
    super(props);
  }
  state = {
    name: "",
    data: { img: "", title: "", cost: 0, content: "" }
  };
  async componentDidMount() {
    const {
      match: { params }
    } = this.props as any;
    const data = await getOnlineStoreProductData(params.id);
    console.log(data.data);
    this.setState({ name: params.id, data: data.data });
  }

  render() {
    return (
      <div>
        <ShopProduct
          title={this.state.data.title}
          price={this.state.data.cost}
          image={this.state.data.img}
        />
      </div>
    );
  }
}

export default ShopViewPage;
