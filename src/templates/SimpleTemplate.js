import React from 'react';
import { Route } from 'react-router-dom';


export default function BookingTemplate(props) {
    
    const { Component, ...restRoute } = props;

    return (
        <div className="w-full">
            <Route {...restRoute} render={(propsRoute) =>
                <Component {...propsRoute} />}>
            </Route>
        </div>
    )
}