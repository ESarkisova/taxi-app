import {createSelector} from "reselect"
import {Selector} from "react-redux"
import {RootState} from "../store"
import {CrewApiDataType, CrewDataType} from "../DAL/types"

const getCrewData: Selector<RootState, CrewApiDataType | undefined> = state => state.main.findedCrew?.data


export const getCrewSort = createSelector<RootState, CrewApiDataType | undefined, Array<CrewDataType> | []>(
    getCrewData,
    (crewData) => (crewData && crewData.crews_info ? [...crewData.crews_info].sort((a, b) => a.distance - b.distance) : [])
)
