import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';



const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1)
    },
    cardContainer: {
        marginTop: theme.spacing(4)
    }
}))

export default function Activities(Card) {
    const classes = useStyle();
    const glassStyle = {
        background: "#ffdcdc",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }
    return (
        <div>
            <div>
                <Paper className={classes.card} style={glassStyle}>
                    React Assignment
                        </Paper>
            </div>
        </div>
    )
}
