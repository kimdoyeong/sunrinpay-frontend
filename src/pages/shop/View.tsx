import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import ShopProduct from '../../components/Page/Shop/ShopProduct';
function ShopViewPage({ match: { params } }: RouteComponentProps) {
    const { id } = (params as any);

    return (
        <div>
            <ShopProduct title="맛스타" price={1500} />
        </div>
    )
}

export default withRouter(ShopViewPage);