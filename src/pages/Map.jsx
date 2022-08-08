import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./Map.css";

function Map() {

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
          ></GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Map;
