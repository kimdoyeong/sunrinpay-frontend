import React from 'react'
import Container from '../../components/Layout/Container'
import SEO from '../../components/SEO'
import ShopHeader from '../../components/Page/Shop/ShopHeader'
import { Route, Switch } from 'react-router-dom';
import ShopList from '../../components/Page/Shop/ShopList';

function Shop() {
    return (
        <>
            <SEO title="온라인 매점" />
            <ShopHeader />

            <Container>
                <Switch>
                    <Route path="/shop" exact>
                        <ShopList />
                    </Route>
                </Switch>
            </Container>
        </>
    )
}

export default Shop;