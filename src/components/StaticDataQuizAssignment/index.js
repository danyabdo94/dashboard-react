import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AssignmentModel from '../../models/AssignmentModel';

const useStyles = makeStyles(() => ({
  quizBox: {
    display: 'flex',
  },
  percentWidth15: {
    width: '15%',
    textAlign: 'left',
  },
  percentWidth70: {
    width: '70%',
    textAlign: 'left',
  },
  percentWidth30: {
    width: '30%',
    textAlign: 'left',
  },
}));

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
};

export default function StaticDataQuizAssignment({ icon, assignment }) {
  const classes = useStyles();
  return (
    <>
      <Typography component="div" align="left">
        <Box className={classes.quizBox}>
          <Box p={1} className={classes.percentWidth15}>
            {icon}
          </Box>
          <Box p={1} className={classes.percentWidth70}>
            <b>{assignment.name}</b>
          </Box>
        </Box>
      </Typography>
      <Box className={classes.quizBox}>
        <Box p={1} className={classes.percentWidth30}>
          Course
        </Box>
        <Box p={1} className={classes.percentWidth70}>
          {assignment.course.name}
        </Box>
      </Box>
      <Box className={classes.quizBox}>
        <Box p={1} className={classes.percentWidth30}>
          Topic
        </Box>
        <Box p={1} className={classes.percentWidth70}>
          {assignment.topic}
        </Box>
      </Box>
      <Box className={classes.quizBox}>
        <Box p={1} className={classes.percentWidth30}>
          Date
        </Box>
        <Box p={1} className={classes.percentWidth70}>
          {new Intl.DateTimeFormat('en', dateOptions).format(
            new Date(assignment.due_to),
          )}
        </Box>
      </Box>
    </>
  );
}

StaticDataQuizAssignment.propTypes = {
  assignment: AssignmentModel.isRequired,
  icon: PropTypes.node.isRequired,
};
