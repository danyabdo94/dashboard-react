import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const loginClicked = () => {
    history.push('/login');
  };
  return (
    <>
      <Button color="primary" onClick={loginClicked}>
        Login
      </Button>
    </>
  );
}
