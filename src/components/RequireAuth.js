import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RequireAuth({ ComposedComponent, props }) {
  const isAuthenticated = useSelector((store) => store.isAuthenticated);
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated) { history.push('/'); }
  }, [isAuthenticated, history]);

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <ComposedComponent {...props} />
  );
}

RequireAuth.propTypes = {
  ComposedComponent: PropTypes.func.isRequired,
  props: PropTypes.shape(),
};

RequireAuth.defaultProps = {
  props: {},
};
