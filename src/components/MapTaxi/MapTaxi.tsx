import React, {useEffect, useRef, useState} from 'react'
import {YMaps, Map, Placemark, PlacemarkGeometry, YMapsApi} from 'react-yandex-maps'
import Typography from "@material-ui/core/Typography"
import {connect} from 'react-redux'
import {RootState} from '../../store'
import {CoordType} from "../../store/types"
import {changeAddress, setCoord} from "../../store/actions"
import {validateAddress} from "../../utils/validateAddress"

function MapTaxi(props: any) {

    const [mapState, setMapState] = useState<YMapsApi | undefined>(undefined)
    const [mapGeoLocation, setMapGeoLocation] = useState({name: '', coord: [0, 0]})

    const geocodeExec = useRef<boolean>(false)

    const getGeoLocation = (ymaps: YMapsApi): Promise<any> => {
        return ymaps.geolocation.get({provider: "yandex", mapStateAutoApply: true})
    }

    const getGeocode = (position: PlacemarkGeometry | string): void => {
        geocodeExec.current = true
        mapState?.geocode(position).then((res: any): void => {
            geocodeExec.current = false

            if (typeof position === "string") {
                const {setCoord} = props
                setCoord(res?.geoObjects?.get(0).properties?.getAll()?.boundedBy[0]);
            } else {
                const {changeAddress} = props
                const address = res?.geoObjects?.get(0)?.properties?.getAll()?.name
                changeAddress(validateAddress(address) ? address : '', true)
            }

        }).catch((err: any) => console.log(err))
    }

    const initialMap = (ymaps: YMapsApi): void => {
        setMapState(ymaps)
        getGeoLocation(ymaps).then(result => {
            setMapGeoLocation({
                name: result.geoObjects.get(0).properties.getAll().name,
                coord: result.geoObjects.position
            })
        })
    }

    useEffect(() => {
        const {coord, address, isValid} = props
        if (!geocodeExec.current && !coord && mapState && address && isValid) {
            getGeocode(`${mapGeoLocation.name},${address}`)
        }
    }, [props.coord, props.address, props.isValid, mapState]);


    const handleClickMap = (e: any): void => {
        const {setCoord} = props
        const coords = e.get('coords');
        setCoord(coords)
        getGeocode(coords)
    }


    return <>
        {!Boolean(mapState) && <Typography variant="subtitle2" gutterBottom>Карта загружается....</Typography>}
        <div className={!Boolean(mapState) ? 'not-visible' : ''}>
            <YMaps
                query={{
                    apikey: process.env.REACT_APP_API_YMAPS_KEY,
                }}>
                <div>
                    <Map state={{center: props.coord || mapGeoLocation.coord, zoom: 16}}
                         modules={["geolocation", "geocode"]}
                         onLoad={initialMap}
                         onClick={handleClickMap}
                    >
                        {Boolean(props.coord) && <Placemark
                            options={{preset: 'islands#icon', iconColor: props.isValid ? 'yellow' : 'red'}}
                            properties={{iconCaption: props.isValid ? '' : 'Адрес не найден'}}
                            geometry={props.coord}/>}
                    </Map>
                </div>
            </YMaps>
        </div>
    </>

}

interface MapTaxiState {
    address: string
    coord: CoordType
    isValid: boolean
}

const mapStateToProps = (state: RootState): MapTaxiState => ({
    address: state.main.address,
    coord: state.main.coord,
    isValid: state.main.isValid,
})

export default connect(mapStateToProps, {setCoord, changeAddress})(MapTaxi)
