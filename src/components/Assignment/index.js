import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Button } from '@material-ui/core';
import StaticDataQuizAssignment from '../StaticDataQuizAssignment';
import AssignmentModel from '../../models/AssignmentModel';
import './Assignment.scss';

export default function Assignment({ assignment }) {
  return (
    <div className="assignment">
      <StaticDataQuizAssignment
        icon={<LibraryBooksIcon color="primary" />}
        assignment={assignment}
      />
      <Button className="assignment__btn" variant="outlined" color="primary">
        Solve Assignment
      </Button>
    </div>
  );
}

Assignment.propTypes = {
  assignment: AssignmentModel.isRequired,
};
