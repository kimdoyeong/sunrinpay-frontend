import React, { useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ShopProduct from "../../components/Page/Shop/ShopProduct";
import { getOnlineStoreProductData } from "../../lib/api/getOnlineStoreData";

function ShopViewPage({ match: { params } }: RouteComponentProps) {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const { id } = params as any;
    getOnlineStoreProductData(id).then(({ data }) => {
      setData({ name: id, ...data });
    });
  }, []);

  if (!data) {
    return <div>로딩 중...</div>;
  }
  return (
    <div>
      <ShopProduct title={data.title} price={data.cost} image={data.img} />
    </div>
  );
}

export default withRouter(ShopViewPage);
