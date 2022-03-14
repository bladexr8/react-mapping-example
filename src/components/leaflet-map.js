import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";

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

// Example Popup for "Melton" 
const popupData = {
    name: 'Melton',
    numStreets: 182,
    numAddresses: 5344,
    CensusPopulation2016: 8069,
    CensusPrivDwellings2016: 3482,
    NumPollingBooths2019: 3 
}


// -37.66038207151701, 144.43080338900472 (BM)
// -37.68046762370196, 144.5923961371349 (Mel)

// Leaftlet Mapping Component
function LeafletMap() {
    console.log(layerDef);
    return (
        <MapContainer center={[-37.66038207151701, 144.43080338900472]}
            zoom={11}
            style={{ height: "100vh" }} >

            <TileLayer
                url={layerDef.url}
                attribution={layerDef.attribution}
                maxZoom={layerDef.maxZoom}
                id={layerDef.id}
                tileSize={layerDef.tileSize}
                zoomOffset={layerDef.zoomOffset}
                accessToken={layerDef.accessToken}
            />

            <Marker position={[-37.67564163,144.61176001]}>
        
                <Popup>
                    <h3>{popupData.name}</h3>
                    <table>
                        <tr>
                            <td><strong># Streets</strong></td>
                            <td>{popupData.numStreets}</td>
                        </tr>
                        <tr>
                            <td><strong># Addresses</strong></td>
                            <td>{popupData.numAddresses}</td>
                        </tr>
                        <tr>
                            <td><strong>Population (2016)</strong></td>
                            <td>{popupData.CensusPopulation2016}</td>
                        </tr>
                        <tr>
                            <td><strong>Private Dwellings (2016)</strong></td>
                            <td>{popupData.CensusPrivDwellings2016}</td>
                        </tr>
                        <tr>
                            <td><strong># Polling Booths (2019)</strong></td>
                            <td>{popupData.NumPollingBooths2019}</td>
                        </tr>
                    </table>
                </Popup>
    
            </Marker>

            <Marker position={[-37.66038207151701, 144.43080338900472]}>
            
            </Marker>

            {/*<GeoJSON data={VicLocalities} />*/}


        </MapContainer>

    )
}

export default LeafletMap;
