import React, { useState } from "react";
import { Marker, MarkerClusterer, InfoWindow } from "@react-google-maps/api";
import "./Stations.css";

function Stations(props) {
  const { stations, oneNetwork, setCenter } = props;

  const [currentStations, setCurrentStation] = useState(null);

  const onCloseInfoWindow = () => {
    setCurrentStation(null);
  };

  return (
    <>
      {stations && (
        <MarkerClusterer>
          {(clusterer) =>
            stations.map((station) => (
              <Marker
                onClick={() => {
                  setCurrentStation(station);
                  setCenter({
                    lat: currentStations.location.latitude,
                    lng: currentStations.location.longitude,
                  });
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
        <>
          <Marker>
            <InfoWindow
              position={{
                lat: currentStations.latitude,
                lng: currentStations.longitude,
              }}
              onCloseClick={onCloseInfoWindow}
            >
              <table>
                <tr>
                  <th>{oneNetwork.location.city} Station</th>
                </tr>
                <tr>
                  <td>
                    <b>Location:</b>
                  </td>
                  <td>{currentStations.name}</td>
                </tr>
                <tr>
                  <td>
                    <b>Country:</b>
                  </td>
                  <td>{oneNetwork.location.country}</td>
                </tr>
                <tr>
                  <td>
                    <b>City:</b>
                  </td>
                  <td>{oneNetwork.location.city}</td>
                </tr>
                <tr>
                  <td>
                    <b>Free Bikes:</b>
                  </td>
                  <td>{currentStations.free_bikes}</td>
                </tr>
                <tr>
                  <td>
                    <b>Empty Slots:</b>
                  </td>
                  <td>{currentStations.empty_slots}</td>
                </tr>
              </table>
            </InfoWindow>
          </Marker>
        </>
      )}
    </>
  );
}

export default Stations;
