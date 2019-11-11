import React from 'react'
import { Route, Switch, RouteProps } from 'react-router-dom';
import loadable from '@loadable/component';
const pages: RouteProps[] = [
    {
        path: '/',
        exact: true,
        component: loadable(() => import('./auth/LoginPage'))
    },
    {
        path: '/signup',
        exact: true,
        component: loadable(() => import('./auth/SignUpPage'))
    },
    {
        path: '/dashboard',
        exact: true,
        component: loadable(() => import('./dashboard'))
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