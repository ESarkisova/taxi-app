import { validateAddress } from '../utils/validateAddress'
import {CHANGE_ADDRESS, MainActionTypes, MainState, SET_COORD, SET_CREWS} from './types'

const initialState: MainState = {
    address: '',
    coord: undefined,
    isValid: false,
    findedCrew: null,
    sendOrder: ''
}

export function searchReducer(
    state = initialState,
    action: MainActionTypes
): MainState {
    switch (action.type) {
        case CHANGE_ADDRESS:
            return {
                ...state,
                address: action.address,
                coord: action.withCoord ? state.coord : undefined,
                isValid: validateAddress(action.address),
                findedCrew: null
            }

        case SET_COORD:
            return {
                ...state,
                coord: action.payload
            }

        case SET_CREWS:
            return {
                ...state,
                findedCrew: action.payload
            }
        default:
            return state
    }
}
