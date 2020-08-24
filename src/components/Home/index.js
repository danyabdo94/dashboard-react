import React from 'react';
import { Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Home.scss';

export default function Home() {
  const history = useHistory();
  const loginClicked = () => {
    history.push('/login');
  };
  return (
    <Box className="login">
      <Button className="login__btn" color="primary" variant="contained" onClick={loginClicked} onTouchStart={loginClicked}>
        Login
      </Button>
    </Box>
  );
}
