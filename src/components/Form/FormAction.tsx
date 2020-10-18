import React from 'react'
import {connect} from 'react-redux'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import {RootState} from '../../store'
import {sendOrder} from "../../store/actions"
import {CoordType} from "../../store/types"
import {CrewDataType} from "../../DAL/types"
import {getCrewSort} from "../../utils/selectors"
import {getDateFormat} from "../../utils/dateFormat"


function FormAction(props: any) {

    const handleClickSendButton = () => {
        const {address, isValid, coord, sendOrder, findedCrew} = props

        const suitableCar = findedCrew && findedCrew.length ? findedCrew[0] : undefined

        if (isValid && coord && suitableCar) {
            sendOrder({
                source_time: getDateFormat(),
                addresses: [{
                    address: address,
                    lat: coord[0],
                    lon: coord[1]
                }],
                crew_id: suitableCar.crew_id
            })
        }
    }

    return (
        <CardActions>
            <Button
                size="small"
                onClick={handleClickSendButton}
                disabled={!props.isValid}
            >Заказать</Button>
        </CardActions>
    );
}

interface AppState {
    coord: CoordType
    address: string
    isValid: boolean
    findedCrew: Array<CrewDataType> | []
}

const mapStateToProps = (state: RootState): AppState => ({
    coord: state.main.coord,
    address: state.main.address,
    isValid: state.main.isValid,
    findedCrew: getCrewSort(state)
})

export default connect(mapStateToProps, {sendOrder})(FormAction)
