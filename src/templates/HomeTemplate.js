import React, { memo, useState } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Route } from 'react-router-dom';

function HomeTemplate(props) {
    
    const { Component, ...restRoute } = props;

    return (
        <div className="w-full">
            <Header />

            <Route {...restRoute} render={(propsRoute) =>
                <Component {...propsRoute} />}>
            </Route>

            <Footer />
        </div>
    )
}

export default memo(HomeTemplate);