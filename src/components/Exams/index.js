import React from 'react';
import './Exams.scss';
import { Typography, Box, Button } from '@material-ui/core';

export default function Exams() {
  return (
    <div className="exams">
      <Box className="exams__content">
        <Typography className="exams__content__title" variant="h5" color="primary">
          Exams Time
        </Typography>
        <Typography className="exams__content__subtitle" variant="p">
          Here we are, Are you ready to fight?
          Don&apos;t worry, we prepared some tips to be ready for your exams.
        </Typography>
        <Typography className="exams__content__quote" variant="p">
          <i>
            &quot;Nothing happens until something moves&quot; ~ Albert Einstein
          </i>
        </Typography>
        <Button className="exams__content__button" variant="contained" color="primary">
          View exams tips
        </Button>
      </Box>
      <Box className="exams__image">
        <img alt="exams" src={`${process.env.PUBLIC_URL}/img/exams-image.png`} />
      </Box>
    </div>
  );
}
