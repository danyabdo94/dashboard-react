import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title({ children }) {
  return (
    <Typography
      component="h3"
      variant="h6"
      align="left"
      gutterBottom
    >
      {children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
