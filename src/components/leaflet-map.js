import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";

import HAWKE from "../data/HAWKEBoundary.json";

// HAWKE = VIC239

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
    NumPollingBooths2019: 3,
    Census2016Summary: 'https://quickstats.censusdata.abs.gov.au/census_services/getproduct/census/2016/quickstat/SSC21631?opendocument',
}


// -37.66038207151701, 144.43080338900472 (BM)
// -37.68046762370196, 144.5923961371349 (Mel)

// map bounds
const outerBounds = [
    [-37.46249769082391, 144.23832855789476],
    [-37.749717128265445, 144.9222274768595],
  ]

// Leaftlet Mapping Component
function LeafletMap() {
    console.log(HAWKE);
    return (
        <MapContainer bounds={outerBounds}
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
                    <a href={popupData.Census2016Summary} target="_blank">{popupData.name}</a>
                    <table>
                        <tr>
                            <td><strong>Population (2016)</strong></td>
                            <td>{popupData.CensusPopulation2016}</td>
                        </tr>
                        <tr>
                            <td><strong># Private Dwellings (2016)</strong></td>
                            <td>{popupData.CensusPrivDwellings2016}</td>
                        </tr>
                        <tr>
                            <td><strong># Streets</strong></td>
                            <td>{popupData.numStreets}</td>
                        </tr>
                        <tr>
                            <td><strong># Addresses</strong></td>
                            <td>{popupData.numAddresses}</td>
                        </tr>
                    </table>
                    
                </Popup>
    
            </Marker>

            <Marker position={[-37.66038207151701, 144.43080338900472]}>
            
            </Marker>

            <GeoJSON key="HAWKE" data={HAWKE}
                style={() => ({
                    color: '#4a83ec',
                    weight: 0.5,
                    fillColor: "#1a1d62",
                    fillOpacity: 0.1,
                   })} />


        </MapContainer>

    )
}

export default LeafletMap;
