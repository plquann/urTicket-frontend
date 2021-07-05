import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute(props) {
  const {
    layout: Layout,
    component: Component,
    ...rest
  } = props;

  const isAuthenticated = useSelector(state => state.isAuthenticated);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
}
