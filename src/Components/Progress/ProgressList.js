import React from 'react'
import { Card, CssBaseline, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Activities from './Activities';
import InputContainer from './Input/InputContainer';



const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "75%",
        backgroundColor: "red",
        marginLeft: theme.spacing(1),
        overflowY: "auto"
    }
}))

export default function ProgressList() {
    const classes = useStyle();
    const glassStyle = {
        background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }
    return (
        <div>
            <Paper className={classes.root} style={glassStyle}>
                <CssBaseline />
                <Typography>
                    <Title />
                    <Activities />
                    <Activities />
                    <Activities />
                    <InputContainer />
                </Typography>
            </Paper>
        </div>
    )
}
