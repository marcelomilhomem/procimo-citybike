import React, { useState } from "react";
import { Marker, MarkerClusterer, InfoWindow } from "@react-google-maps/api";
import "./Stations.css";

function Stations(props) {
  const { stations, oneNetwork, setCenter } = props;

  const [currentStations, setCurrentStation] = useState();

  const onCloseInfoWindow = () => {
    setCurrentStation();
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
                <thead>
                  <tr>
                    <th>{oneNetwork.location.city} Station</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Location:</b>
                    </td>
                    <td>{currentStations.name}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <b>Country:</b>
                    </td>
                    <td>{oneNetwork.location.country}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <b>City:</b>
                    </td>
                    <td>{oneNetwork.location.city}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <b>Free Bikes:</b>
                    </td>
                    <td>{currentStations.free_bikes}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <b>Empty Slots:</b>
                    </td>
                    <td>{currentStations.empty_slots}</td>
                  </tr>
                </tbody>
              </table>
            </InfoWindow>
          </Marker>
        </>
      )}
    </>
  );
}

export default Stations;
