import React from 'react';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Button } from '@material-ui/core';
import AssignmentModel from '../../models/AssignmentModel';
import StaticDataQuizAssignment from '../StaticDataQuizAssignment';
import './Quiz.scss';

export default function Quiz({ assignment }) {
  return (
    <div className="quiz">
      <StaticDataQuizAssignment
        icon={<AssessmentIcon color="primary" />}
        assignment={assignment}
      />
      <Button className="quiz__btn" variant="outlined" color="primary">
        Start Quiz
      </Button>
    </div>
  );
}

Quiz.propTypes = {
  assignment: AssignmentModel.isRequired,
};
