
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({
    layout: Layout,
    component: Component,
    ...rest
}) => {
    const isAdmin = useSelector(state => state.auth.isAdmin);
    return (
        <Route
            {...rest}
            render={props =>
                isAdmin ? (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    );
}


export default ProtectedRoute;