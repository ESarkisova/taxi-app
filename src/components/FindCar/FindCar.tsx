import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from "@material-ui/core/styles"
import Car from "../Car/Car"
import {CrewDataType} from "../../DAL/types"
import {RootState} from "../../store"
import {connect} from "react-redux"
import {getCrewSort} from "../../utils/selectors"

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

function FindCar(props: FindCarState) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.h} variant="h6" component="h3">
                Подходящий экипаж
            </Typography>
            {props.findedCrew[0] && <Car {...props.findedCrew[0]}/>}
        </div>
    );
}
type FindCarState = {
    findedCrew: Array<CrewDataType> | []
}

const mapStateToProps = (state: RootState): FindCarState => ({
    findedCrew: getCrewSort(state)
})

export default connect(mapStateToProps)(FindCar)
