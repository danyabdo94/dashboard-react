import React from 'react';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Button } from '@material-ui/core';
import AssignmentModel from '../../models/AssignmentModel';
import StaticDataQuizAssignment from '../StaticDataQuizAssignment';

export default function Quiz({ assignment }) {
  return (
    <div style={{ margin: 8 }}>
      <StaticDataQuizAssignment
        icon={<AssessmentIcon />}
        assignment={assignment}
      />
      <Button style={{ margin: 8 }} variant="contained" color="primary">
        Start Quiz
      </Button>
    </div>
  );
}

Quiz.propTypes = {
  assignment: AssignmentModel.isRequired,
};
