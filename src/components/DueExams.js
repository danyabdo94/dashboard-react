import React from 'react';
import Title from './Title';
import Quiz from './Quiz';

const types = {
  QUIZ: "1",
  ASSIGNMENT: "2"
}

export default function DueExams(props) {
  const assignmenView = (assignment) => {
    switch (assignment?.type?.id) {
      case types.QUIZ:
        return (<Quiz key={assignment.id} assignment={assignment} />);

      // case types.ASSIGNMENT:
      //   return (<Assignment key={assignment.id} assignment={assignment} />);
    }
  }
  return (
    <React.Fragment>
      <Title>What's Due</Title>
      {props.dueAssignemnts.map((assignment) => assignmenView(assignment))}
    </React.Fragment>
  );
}
