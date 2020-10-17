import React, {useEffect} from "react"
import {CoordType} from "../../store/types"
import {RootState} from "../../store"
import {connect} from "react-redux"
import {getFindedCrew} from "../../store/actions"
import {ApiDataType, CrewApiDataType, CrewDataType} from "../../DAL/types"
import {getDateFormat} from "../../utils/dateFormat"
import {Card} from "@material-ui/core"
import CarLine from "../Car/CarLine"
import {getCrewSort} from "../../utils/selectors"

type CarListProps  = CarListActions & CarListState

function CarList(props: CarListProps) {

    useEffect(() => {
        const {coord, address, isValid, getFindedCrew} = props
        if (coord && address && isValid) {
            getFindedCrew({
                source_time: getDateFormat(),
                addresses: [
                    {
                        address,
                        lat: coord[0],
                        lon: coord[1]
                    }
                ]
            })
        }
    }, [props.coord, props.address, props.isValid])

    if (!props.findedCrew) return null

    return (
        <Card>
            {props.findedCrew.code && `Возникли ошибки при получении данных ${props.findedCrew.descr}`}
            {props.crewSort.length && props.crewSort.map((crew: CrewDataType) => <CarLine key={crew.crew_id} {...crew}/>)}
        </Card>
    )
}

interface CarListState {
    address: string
    coord: CoordType
    isValid: boolean
    findedCrew: ApiDataType<CrewApiDataType> | null
    crewSort: Array<CrewDataType> | []
}

interface CarListActions {
    getFindedCrew: (object: any) => void
}

const mapStateToProps = (state: RootState): CarListState => ({
    address: state.main.address,
    coord: state.main.coord,
    isValid: state.main.isValid,
    findedCrew: state.main.findedCrew,
    crewSort: getCrewSort(state)
})

export default connect(mapStateToProps, {getFindedCrew})(CarList)
