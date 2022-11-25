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
    <div>
      <div id="map-page" className="map-div">
        <div className="map-size">
          {isLoaded && networks ? (
            <GoogleMap
              mapContainerStyle={{
                width: "90vw",
                height: "50vh",
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
       {/*  <div className="sections">
          <section>
            <h2>Networks</h2>
            <p className="section-p"><i class="fa-solid fa-bicycle"></i>` The number on the red, blue or yellow markers, represents the number of networks. `</p>
          </section>
          <section>
            <h2>Selected Network</h2>
            <p className="section-p"><i class="fa-solid fa-bicycle"></i>You can choose one of the networks and view the available stations.</p>
          </section>
          <section>
            <h2>Stations</h2>
            <p className="section-p"><i class="fa-solid fa-bicycle"></i>After selecting one of the network, only the stations will appear on the map.</p>
          </section>
          <section>
            <h2>Stations Details</h2>
            <p className="section-p"><i class="fa-solid fa-bicycle"></i>And finally, after clicking on a specific station, you can see details about the address, number of bikes available, city, etc.</p>
          </section>
        </div> */}
      </div>
    </div>
  );
}

export default Map;
