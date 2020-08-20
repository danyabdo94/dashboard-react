
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  // seeMore: {
  //   marginTop: theme.spacing(3),
  // },
}));

export default function Exams() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h1" variant="h6" color="primary" align="left" gutterBottom>
        Exams Time
      </Typography>

    </React.Fragment>
  );
}