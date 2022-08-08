import React, { useState } from "react";
import { Marker, MarkerClusterer, InfoWindow } from "@react-google-maps/api";

function Networks(props) {

  const { networks, setOneNetwork, handleExploreStations, setZoom, setCenter } =
    props;

  return (
    <div>
      {networks && (
        <MarkerClusterer>
          {(clusterer) =>
            networks.map((network) => (
              <Marker
                onClick={() => {}}
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
    </div>
  );
}

export default Networks;
