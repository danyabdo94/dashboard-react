import React, { useEffect } from 'react';
import StaticDataQuizAssignemnt from './StaticDataQuizAssignemnt';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Button } from '@material-ui/core';

export default function Assignment(props) {
    useEffect(() => {
        console.log(props);
    })
    return (
        <div style={{ margin: 8 }}>
            <StaticDataQuizAssignemnt icon={<LibraryBooksIcon></LibraryBooksIcon>} assignment={props?.assignment} />
            <Button style={{ margin: 8 }} variant="contained" color="primary">
                Solve Assignment
            </Button>
        </div>
    );
}
