import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

/*

OpenStreet Map Tile Layer

<TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

*/

/* Mapbox TileLayer definition */
const layerDef = {
    url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
}


// Leaftlet Mapping Component
function LeafletMap() {
    console.log(layerDef);
    return (
        <MapContainer center={[-37.68046762370196, 144.5923961371349]} zoom={13}>

            <TileLayer
                url={layerDef.url}
                attribution={layerDef.attribution}
                maxZoom={layerDef.maxZoom}
                id={layerDef.id}
                tileSize={layerDef.tileSize}
                zoomOffset={layerDef.zoomOffset}
                accessToken={layerDef.accessToken}
            />

            <Marker position={[51.505, -0.09]}>
        
                <Popup>
                    A pretty CSS3 popup. < br /> Easily customizable.
                </Popup>
    
            </Marker>


        </MapContainer>

    )
}

export default LeafletMap;