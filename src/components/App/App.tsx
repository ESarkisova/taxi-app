import React from 'react'
import {connect, Provider} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import './App.css'
import Form from "../Form/Form"
import MapTaxi from "../MapTaxi/MapTaxi"
import FindCar from "../FindCar/FindCar"
import store, {RootState} from '../../store'
import CarList from "../CarList/CarList"
import {sendOrder} from "../../store/actions"
import {CoordType} from "../../store/types"
import {CrewDataType} from "../../DAL/types"
import {getCrewSort} from "../../utils/selectors"
import {getDateFormat} from "../../utils/dateFormat"

const useStyles = makeStyles({
    root: {
        minWidth: 600,
    },
    container: {
        display: 'flex',
    }
})

function App(props: any) {

    const classes = useStyles();

    const handleClickSendButton = () => {
        const {address, isValid, coord, sendOrder, crewSort} = props
        isValid && coord && crewSort[0] && sendOrder({
            source_time: getDateFormat(),
            addresses: [{
                address: address,
                lat: coord[0],
                lon: coord[1]
            }],
            crew_id: crewSort[0].crew_id
        })
    }

    return (
        <Provider store={store}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                        Детали заказа
                    </Typography>
                    <Divider variant="fullWidth"/>
                    <Form/>
                    <FindCar/>

                    <div className={classes.container}>
                        <MapTaxi/>
                        <CarList/>
                    </div>

                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={handleClickSendButton}
                        disabled={!props.isValid}
                    >Заказать</Button>
                </CardActions>
            </Card>
        </Provider>
    );
}

interface AppState {
    coord: CoordType
    address: string
    isValid: boolean
    crewSort: Array<CrewDataType> | []
}

const mapStateToProps = (state: RootState): AppState => ({
    coord: state.main.coord,
    address: state.main.address,
    isValid: state.main.isValid,
    crewSort: getCrewSort(state)
})

export default connect(mapStateToProps, {sendOrder})(App)
