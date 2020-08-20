import React, { useEffect } from 'react';
import StaticDataQuizAssignemnt from './StaticDataQuizAssignemnt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Button } from '@material-ui/core';
export default function Quiz(props) {
    useEffect(() => {
        console.log(props);
    })
    return (
        <div style={{ margin: 8 }}>
            <StaticDataQuizAssignemnt icon={<AssessmentIcon></AssessmentIcon>} assignment={props?.assignment} />
            <Button style={{ margin: 8 }} variant="contained" color="primary">
                Start Quiz
            </Button>
        </div>
    );
}
