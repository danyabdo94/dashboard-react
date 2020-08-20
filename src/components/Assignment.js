import React, { useEffect, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    quizBox: {
        display: 'flex',
    },
    percentWidth15: {
        width: "15%",
        textAlign: "left"
    },
    percentWidth70: {
        width: "70%",
        textAlign: "left"
    },
    percentWidth30: {
        width: "30%",
        textAlign: "left"
    },
}));

const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
}

export default function Quiz(props) {
    const classes = useStyles();
    useEffect(() => {
        console.log(props);
    })
    return (
        <>
            <Typography component="div" variant="p" align="left" >
                <Box class={classes.quizBox}  >
                    <Box p={1} class={classes.percentWidth15}>
                        <DashboardIcon />
                    </Box>
                    <Box p={1} class={classes.percentWidth70} >
                        <b>{props?.assignment?.name}</b>
                    </Box>
                </Box>
            </Typography>
            <Box class={classes.quizBox}  >
                <Box p={1} class={classes.percentWidth30}>
                    Course
                </Box>
                <Box p={1} class={classes.percentWidth70} >
                    {props?.assignment?.course?.name}
                </Box>
            </Box>
            <Box class={classes.quizBox}  >
                <Box p={1} class={classes.percentWidth30}>
                    Topic
                </Box>
                <Box p={1} class={classes.percentWidth70} >
                    {props?.assignment?.topic}
                </Box>
            </Box>
            <Box class={classes.quizBox} >
                <Box p={1} class={classes.percentWidth30}>
                    Date
                </Box>
                <Box p={1} class={classes.percentWidth70} >
                    {new Intl.DateTimeFormat('en',dateOptions).format(new Date(props?.assignment?.due_to))}
                </Box>
            </Box>
        </>
    );
}
