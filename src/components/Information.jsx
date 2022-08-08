import React from "react";
import clusterImg from "../img/cluster.png";
import networkImg from "../img/s.png";
import stations from "../img/stations.png";
import stationDetail from "../img/s.png";

function Information() {
  return (
    <div>
      <div>
        <img src={clusterImg} alt="cluster" />
      </div>
      <div>
        <img src={networkImg} alt="click-network" />
      </div>
      <div>
        <img src={stations} alt="stations" />
      </div>
      <div>
        <img src={stationDetail} alt="station-detail" />
      </div>
    </div>
  );
}

export default Information;
