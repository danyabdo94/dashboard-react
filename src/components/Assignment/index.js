import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Button } from '@material-ui/core';
import StaticDataQuizAssignment from '../StaticDataQuizAssignment';
import AssignmentModel from '../../models/AssignmentModel';

export default function Assignment({ assignment }) {
  return (
    <div style={{ margin: 8 }}>
      <StaticDataQuizAssignment
        icon={<LibraryBooksIcon />}
        assignment={assignment}
      />
      <Button style={{ margin: 8 }} variant="contained" color="primary">
        Solve Assignment
      </Button>
    </div>
  );
}

Assignment.propTypes = {
  assignment: AssignmentModel.isRequired,
};
