import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./Map.css";
import "./MapR.css";
import { useState, useEffect } from "react";
import Networks from "../components/Networks";
import Stations from "../components/Stations";
import axios from "axios";

function Map() {
  const [networks, setNetworks] = useState([]);
  const [stations, setStations] = useState([]);
  const startCenter = { lat: 38.732716, lng: -9.151577 };
  const [center, setCenter] = useState(startCenter);
  const [showNetworks, setShowNetworks] = useState(false);
  const [showStations, setShowStations] = useState(false);
  const [oneNetwork, setOneNetwork] = useState([]);
  const [showButton, setShowButton] = useState(false);

  const fetchNetworks = async () => {
    try {
      let response = await axios.get(`http://api.citybik.es/v2/networks`);
      setNetworks(response.data.networks);
      setShowNetworks(true);
    } catch (error) {
      alert(error);
    }
  };

  const fetchStations = async (id) => {
    try {
      let response = await axios.get(`http://api.citybik.es/v2/networks/${id}`);
      setStations(response.data.network.stations);
      setShowStations(true);
      setShowButton(true);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchNetworks();
  }, []);

  const getStations = async (id) => {
    setShowStations(true);
    setShowNetworks(false);
    await fetchStations(id);
  };

  /* const getNetworksPerCountry = () => {
    const oClusters = new Map();
    let aMarkers;
    networks.forEach((oEntry) => {
      aMarkers = oClusters.get(oEntry.location.country);
      if (!aMarkers) {
        oClusters.set(oEntry.location.country, [oEntry]);
      } else {
        aMarkers.push(oEntry);
        oClusters.set(oEntry.location.country, aMarkers);
      }
    });
    setNetworks(oClusters);
  };
 */
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  return (
    <div id="map-page" className="map-div">
      <div className="map-size">
        {isLoaded && networks ? (
          <GoogleMap
            mapContainerStyle={{
              width: "70vw",
              height: "70vh",
            }}
            center={center}
            zoom={10}
          >
            {showNetworks && (
              <Networks
                networks={networks}
                setOneNetwork={setOneNetwork}
                setCenter={setCenter}
                getStations={getStations}
              />
            )}
            {showStations && (
              <Stations stations={stations} oneNetwork={oneNetwork} />
            )}
          </GoogleMap>
        ) : (
          <></>
        )}
        <div className="button-div">
          <p className="map-title">MAP</p>
          <div>
            <button
              onClick={() => {
                setShowNetworks(true);
                setShowStations(false);
              }}
              className="back-to-networks"
            >
              NetWorks
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1486976862325-fbac7b41739b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="oioi"
        />
      </div>
    </div>
  );
}

export default Map;
