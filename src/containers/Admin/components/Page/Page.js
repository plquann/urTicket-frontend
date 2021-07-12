import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet-async';
import { Box } from '@material-ui/core';

const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <Box ref={ref} {...other}>
    <>
      <title>{title}</title>
    </>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
