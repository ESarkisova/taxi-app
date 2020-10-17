import {ApiDataType, CrewApiDataType, OrderResponseType} from "./types";

export const dataCrew: ApiDataType<CrewApiDataType> = {
    "code": 0,
    "descr": "OK",
    "data": {
        "crews_info": [
            {
                "crew_id": 123,
                "car_mark": "Chevrolet",
                "car_model": "Lacetti",
                "car_color": "синий",
                "car_number": "Е234КУ",
                "driver_name": "Деточкин",
                "driver_phone": "7788",
                "lat": 56.855532,
                "lon": 53.217462,
                "distance": 300
            }, {
                "crew_id": 125,
                "car_mark": "Hyundai",
                "car_model": "Solaris",
                "car_color": "белый",
                "car_number": "Ф567АС",
                "driver_name": "Петров",
                "driver_phone": "8899",
                "lat": 56.860581,
                "lon": 53.209223,
                "distance": 1200
            }, {
                "crew_id": 126,
                "car_mark": "Chevrolet",
                "car_model": "Aveo",
                "car_color": "синий",
                "car_number": "Е234КУ",
                "driver_name": "Деточкин",
                "driver_phone": "6688",
                "lat": 57.855532,
                "lon": 52.217462,
                "distance": 400
            }, {
                "crew_id": 128,
                "car_mark": "Chevrolet",
                "car_model": "Lanos",
                "car_color": "белый",
                "car_number": "Ф525АС",
                "driver_name": "Петрович",
                "driver_phone": "4455",
                "lat": 53.860581,
                "lon": 51.209223,
                "distance": 500
            }
        ]
    }
}

export const dataOrder: OrderResponseType = {
    "code": 0,
    "descr": "OK",
    "data": {
        "order_id": 12345
    }
}


