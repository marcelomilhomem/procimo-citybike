import React, { useState } from "react";
import { Marker, MarkerClusterer, InfoWindow } from "@react-google-maps/api";

function Stations(props) {
  const { stations, oneNetwork } = props;

  const [currentStations, setCurrentStation] = useState(null);

  const onCloseInfoWindow = () => {
    setCurrentStation(null)
  }

  return (
    <>
      {stations && (
        <MarkerClusterer>
          {(clusterer) =>
            stations.map((station) => (
              <Marker
                onClick={() => {
                  setCurrentStation(station);
                }}
                key={station.id}
                position={{
                  lat: station.latitude,
                  lng: station.longitude,
                }}
                clusterer={clusterer}
              />
            ))
          }
        </MarkerClusterer>
      )}

      {currentStations && (
        <Marker>
          <InfoWindow
            position={{
              lat: currentStations.latitude,
              lng: currentStations.longitude,
            }}
            onCloseClick={{onCloseInfoWindow}}
          >
            <div className="station-info">
              <h1>{oneNetwork.name}</h1>
              <h5>
                {oneNetwork.location.city},{oneNetwork.location.country}
              </h5>
              <br />
              <hr />
              <br />
              <h4>{currentStations.name}</h4>
              <p>
                <b>Free bikes: </b>
                {currentStations.free_bikes}
                <br />
                <b>Empty slots: </b>
                {currentStations.empty_slots}
              </p>
            </div>
          </InfoWindow>
        </Marker>
      )}
    </>
  );
}

export default Stations;
