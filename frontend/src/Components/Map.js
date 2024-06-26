import React, {useEffect} from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
// import pin from './assets/pin.png'

const icon = L.icon({
    iconUrl: './pin.png',
    iconSize: [38, 38]
});

// const position = [51.505, -0.09]

function ResetCenterView(props){
    const { selectPosition } = props;
    const map = useMap();

    useEffect(() => {
        if(selectPosition) {
            map.setView(
                L.latLng(selectPosition?.lat, selectPosition?.lon),
                map.getZoom(),{
                    animate: true
                }
            )
        }
    }, [selectPosition]);

    
    return null;
}


export default function Maps(props){
    const { selectPosition } = props;
    const locationSelection = [selectPosition?.lat, selectPosition?.lon];
    console.log(locationSelection);
    return(
    <MapContainer center={[30.26802515, 77.99611868208233]} style={{ width: '100%', height: '100%' }} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=mgOqCieZn4MvYrmYQjFY"
        />
        {selectPosition && (
        <Marker position={locationSelection} icon={icon}> 
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
        )}
        <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
    )
}