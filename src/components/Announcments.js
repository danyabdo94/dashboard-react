import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';

export default function Announcments() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
        AOP
    </React.Fragment>
  );
}
