import React, { useState } from "react";
import { Marker, MarkerClusterer, InfoWindow } from "@react-google-maps/api";
import axios from "axios";
import "./Networks.css";

function Networks(props) {
  const { networks, setOneNetwork, getStations, setCenter } =
    props;

  const [network, setNetwork] = useState(null);

  const getNetworkId = async (id) => {
    try {
      let response = await await axios.get(
        `http://api.citybik.es/v2/networks/${id}`
      );
      setNetwork(response.data.network);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {networks && (
        <MarkerClusterer>
          {(clusterer) =>
            networks.map((network) => (
              <Marker
                onClick={() => {
                  getNetworkId(network.id);
                  setOneNetwork(network);
                }}
                key={network.id}
                position={{
                  lat: network.location.latitude,
                  lng: network.location.longitude,
                }}
                clusterer={clusterer}
              />
            ))
          }
        </MarkerClusterer>
      )}
      {network && (
        <Marker>
          <InfoWindow
            position={{
              lat: network.location.latitude,
              lng: network.location.longitude,
            }}
          >
            <div>
              <h1>{network.location.city} Networks</h1>
              <button
                className="info-window"
                onClick={() => {
                  getStations(network.id);
                  setCenter({
                    lat: network.location.latitude,
                    lng: network.location.longitude,
                  });
                }}
              >
                Stations
              </button>
            </div>
          </InfoWindow>
        </Marker>
      )}
    </div>
  );
}

export default Networks;
