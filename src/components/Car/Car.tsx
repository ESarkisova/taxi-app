import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from "@material-ui/core/styles"
import SvgIcon from "@material-ui/core/SvgIcon"
import { CrewDataType } from '../../DAL/types'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: 250,
    },
    h: {
        marginBottom: 10,
    },
    container: {
        margin: 20
    },
    icon: {
        width: 20,
        marginLeft: 10
    }
})

function CarIcon(props: any) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function Car(props: CrewDataType) {
    const classes = useStyles()

    return (
            <Card className={classes.root}>
                <CarIcon className={classes.icon} />
                <CardContent>
                    <Typography variant="caption" component="span">
                        {props.car_mark}
                    </Typography>
                    <Typography color="textSecondary">
                        {props.car_color}
                    </Typography>
                    <Button variant="outlined" size="medium" color="primary">
                        {props.car_number}
                    </Button>
                </CardContent>
            </Card>
    );
}


export default Car
