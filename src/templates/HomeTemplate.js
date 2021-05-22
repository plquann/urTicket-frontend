import Footer from 'components/Footer';
import Header from 'components/Header';
import MainFooter from 'components/Footer';
import React from 'react'
import { Route } from 'react-router';

export default function HomeTemplate(props) {
    const { Component, ...restRoute } = props;

    return (
        <Route {...restRoute} render={(propsRoute) => {
            return (
                <div>
                    <Header />
                    <Component {...propsRoute} />
                    <MainFooter />
                </div>
            )
        }}>
        </Route>
    )
}