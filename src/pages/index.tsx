import React from 'react'
import { Route, Switch, RouteProps } from 'react-router-dom';
import loadable from '@loadable/component';
const pages: RouteProps[] = [
    {
        path: '/',
        exact: true,
        component: loadable(() => import('./LoginPage'))
    }
];

function Pages() {
    return (
        <Switch>
            {pages.map((pageProp, i) => (
                <Route key={i} {...pageProp} />
            ))}
        </Switch>
    )
}

export default Pages;