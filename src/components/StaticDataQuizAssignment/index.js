import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import AssignmentModel from '../../models/AssignmentModel';
import './StaticDataQuizAssignment.scss';

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
};

export default function StaticDataQuizAssignment({ icon, assignment }) {
  return (
    <>
      <Typography component="div">
        <Box className="quizBox">
          <Box p={1} className="quizBox__icon">
            {icon}
          </Box>
          <Box p={1} className="quizBox__right">
            <b>{assignment.name}</b>
          </Box>
        </Box>
      </Typography>
      <Box className="quizBox">
        <Box p={1} className="quizBox__left">
          Course
        </Box>
        <Box p={1} className="quizBox__right">
          {assignment.course.name}
        </Box>
      </Box>
      <Box className="quizBox">
        <Box p={1} className="quizBox__left">
          Topic
        </Box>
        <Box p={1} className="quizBox__right">
          {assignment.topic}
        </Box>
      </Box>
      <Box className="quizBox">
        <Box p={1} className="quizBox__left">
          Date
        </Box>
        <Box p={1} className="quizBox__right">
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
