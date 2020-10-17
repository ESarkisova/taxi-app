export type CodeError = 0 | 1

export interface CrewDataType {
    crew_id: number
    car_mark: string
    car_model: string
    car_color: string
    car_number: string
    driver_name: string
    driver_phone: string
    lat: number
    lon: number
    distance: number
}

export interface CrewApiDataType {
    crews_info: Array<CrewDataType> | []
}

export interface ApiDataType<T> {
    code: CodeError
    descr: string
    data?: T
}

export interface AddressType {
    address: string
    lat: number
    lon: number
}

export interface CrewRequestType {
    source_time: string
    addresses: Array<AddressType>
}

export interface OrderRequestType {
    source_time: string
    addresses: Array<AddressType>
    crew_id: number
}

export type OrderResponseType = ApiDataType<{ order_id: number }>

