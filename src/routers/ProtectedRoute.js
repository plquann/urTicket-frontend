
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  layout: Layout,
  component: Component,
  isAuthenticated,
  ...rest
}) => (
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

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool
};
ProtectedRoute.defaultProps = {
  isAuthenticated: true
};

export default ProtectedRoute;