import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./Map.css";
import { useState, useEffect } from "react";
import Networks from "../components/Networks";
import axios from "axios";

function Map() {
  const [networks, setNetworks] = useState([]);
  const [center, setCenter] = useState();
  const [showNetworks, setShowNetworks] = useState(false);

  const fetchNetworks = async () => {
    try {
      let response = await axios.get(`http://api.citybik.es/v2/networks`);
      setNetworks(response.data.networks);
      setShowNetworks(true);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchNetworks();
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  return (
    <div className="map-div">
      <div className="map-size">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: "70vw",
              height: "70vh",
              border: "1px solid #93D2A4",
            }}
            center={{
              lat: 38.763451,
              lng: -9.307362,
            }}
            zoom={10}
          >
            {showNetworks && (
              <Networks networks={networks} setCenter={setCenter} />
            )}
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Map;
