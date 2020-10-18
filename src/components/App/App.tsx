import React from 'react'
import {Provider} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import './App.css'
import Form from "../Form/Form"
import MapTaxi from "../MapTaxi/MapTaxi"
import FindCar from "../FindCar/FindCar"
import store from '../../store'
import CarList from "../CarList/CarList"
import FormAction from "../Form/FormAction"

const useStyles = makeStyles({
    root: {
        minWidth: 600,
    },
    container: {
        display: 'flex',
    }
})

function App() {

    const classes = useStyles();


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

                <FormAction/>

            </Card>
        </Provider>
    )
}

export default App
