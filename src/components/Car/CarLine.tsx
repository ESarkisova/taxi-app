import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from "@material-ui/core/styles"
import { CrewDataType } from '../../DAL/types'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        padding: '0 10px 0 0',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 250,
        borderRadius: 0,
        borderBottom: '1px solid #000',
    },
    h: {
        marginBottom: 10,
    },
    container: {
        margin: 0,
        padding: '8px 10px'
    }
})


function CarLine(props: CrewDataType) {
    const classes = useStyles();

    return (
            <Card className={classes.root}>
                <CardContent className={classes.container}>
                    <Typography variant="caption" component="span">
                        {props.car_mark}
                    </Typography>
                    <Typography color="textSecondary">
                        {props.car_color}
                    </Typography>
                </CardContent>
                <Typography color="textSecondary">
                    {props.distance} m
                </Typography>
            </Card>
    );
}


export default CarLine;
