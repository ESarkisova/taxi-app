import {ApiDataType, CrewApiDataType} from "../DAL/types"

export const CHANGE_ADDRESS = 'CHANGE_ADDRESS'
export const SET_COORD = 'SET_COORD'
export const SET_CREWS = 'SET_CREWS'
export const SEND_ORDER = 'SEND_ORDER'

interface ChangeAddressAction {
    type: typeof CHANGE_ADDRESS
    address: string
    withCoord?: boolean
}

interface SetCoordAction {
    type: typeof SET_COORD
    payload: CoordType
}

interface SetCrews {
    type: typeof SET_CREWS
    payload: ApiDataType<CrewApiDataType>
}

interface SendOrder {
    type: typeof SEND_ORDER
    payload: string
}


export type MainActionTypes = ChangeAddressAction | SetCoordAction | SetCrews | SendOrder

export type CoordType = Array<number> | undefined

export interface MainState {
    address: string
    coord: CoordType
    isValid: boolean
    findedCrew: ApiDataType<CrewApiDataType> | null
    sendOrder: string
}
