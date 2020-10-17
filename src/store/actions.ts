import {CHANGE_ADDRESS, SET_COORD, MainActionTypes, CoordType, SET_CREWS, SEND_ORDER} from './types'
import {CrewRequestType, OrderRequestType} from "../DAL/types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./index";
import { Action } from 'redux';
import { getCrewFromAddress } from '../DAL/api';

export function changeAddress(address: string, withCoord: boolean): MainActionTypes {
    return {
        type: CHANGE_ADDRESS,
        address,
        withCoord
    }
}

export function setCoord(coord: CoordType): MainActionTypes {
    return {
        type: SET_COORD,
        payload: coord
    }
}

export function getFindedCrew(object: CrewRequestType): ThunkAction<void, RootState, unknown, Action<string>> {
    return dispatch => {
        getCrewFromAddress(object).then(res => {
            dispatch({
                type: SET_CREWS,
                payload: res
            })
        })
    }
}

export function sendOrder(object: OrderRequestType): ThunkAction<void, RootState, unknown, Action<string>> {
    return dispatch => {
        getCrewFromAddress(object).then(res => {
            dispatch({
                type: SEND_ORDER,
                payload: res.descr
            })
        })
    }
}
