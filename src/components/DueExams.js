import React from 'react';
import Title from './Title';
import Quiz from './Quiz';
import Assignment from './Assignment';
import { Divider } from '@material-ui/core';

const types = {
  QUIZ: "1",
  ASSIGNMENT: "2"
}

export default function DueExams(props) {
  const assignmenView = (assignment, index) => {
    switch (assignment?.type?.id) {
      case types.QUIZ:
        return (<>
          <Quiz key={assignment.id} assignment={assignment} />
          {index < props.dueAssignemnts.length - 1 ? <Divider p={1} /> : ""}
        </>)

      case types.ASSIGNMENT:
        return (<>
          <Assignment key={assignment.id} assignment={assignment} />
          {index < props.dueAssignemnts.length - 1 ? <Divider p={1} /> : ""}
        </>)

      default:
        return;
    }
  }
  return (
    <>
      <Title>What's Due</Title>
      {props.dueAssignemnts.map((assignment, index) => assignmenView(assignment, index))}
    </>
  );
}
