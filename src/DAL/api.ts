import {ApiDataType, CrewApiDataType, CrewRequestType, OrderRequestType, OrderResponseType} from "./types";
import {dataCrew, dataOrder} from "./mock-data";

export const getCrewFromAddress = (object: CrewRequestType): Promise<ApiDataType<CrewApiDataType>> => {
    return new Promise(
        (resolve, reject) => {
            if (dataCrew.code) {
                reject(dataCrew)
            } else {
                resolve(dataCrew)
            }
        }
    )
}

export const sendOrder = (object: OrderRequestType): Promise<OrderResponseType> => {
    return new Promise(
        (resolve, reject) => {
            if (dataOrder.code) {
                reject(dataOrder)
            } else {
                resolve(dataOrder)
            }
        }
    )
}
