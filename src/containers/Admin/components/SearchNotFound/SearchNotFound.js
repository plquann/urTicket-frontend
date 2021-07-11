import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string
};

const useStyles = makeStyles({
  root: {
    background: '#191C24'
  }
});

export default function SearchNotFound({ searchQuery = '', ...other }) {
  const classes = useStyles();

  return (
    <Paper {...other} className={classes.root}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Not found
      </Typography>
      <Typography variant="body2" align="center">
        No results found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or using complete words.
      </Typography>
    </Paper>
  );
}
