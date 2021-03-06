import React from 'react';
import {
  Divider, Box, IconButton,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Title from '../Title';
import Quiz from '../Quiz';
import Assignment from '../Assignment';
import AssignmentModel from '../../models/AssignmentModel';
import './DueExams.scss';

const types = {
  QUIZ: '1',
  ASSIGNMENT: '2',
};

export default function DueExams({ dueAssignments }) {
  const assignmentView = (assignment, index) => {
    switch (assignment.type.id) {
      case types.QUIZ:
        return (
          <React.Fragment key={`frag${assignment.id}`}>
            <Quiz key={assignment.id} assignment={assignment} />
            {index < dueAssignments.length - 1 ? <Divider p={1} /> : ''}
          </React.Fragment>
        );

      case types.ASSIGNMENT:
        return (
          <React.Fragment key={`frag${assignment.id}`}>
            <Assignment key={assignment.id} assignment={assignment} />
            {index < dueAssignments.length - 1 ? <Divider p={1} /> : ''}
          </React.Fragment>
        );

      default:
        return <div>Not Found</div>;
    }
  };
  return (
    <>
      <Box className="titleBox">
        <Box className="titleBox__text">
          <Title>What&apos;s Due</Title>
        </Box>
        <IconButton className="titleBox__link" color="primary" aria-label="All">
          <span>All</span>
        </IconButton>
      </Box>

      {dueAssignments?.map((assignment, index) => assignmentView(assignment, index))}
    </>
  );
}

DueExams.propTypes = {
  dueAssignments: PropTypes.arrayOf(AssignmentModel),
};

DueExams.defaultProps = {
  dueAssignments: null,
};
