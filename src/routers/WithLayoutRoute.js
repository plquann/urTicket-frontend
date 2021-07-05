import React from 'react';
import { Route } from 'react-router-dom';

export default function WithLayoutRoute(props) {
    const { layout: Layout, component: Component, layoutProps, ...rest } = props;

    return (
        <Route
            {...rest}
            render={matchProps => (
                <Layout {...layoutProps}>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    );
};

