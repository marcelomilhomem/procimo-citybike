import React from "react";
import clusterImg from "../img/cluster.png";
import networkImg from "../img/cde.png";
import stations from "../img/fgh.png";
import stationDetail from "../img/station-datails.png";
import "./Information.css";
import "./InformationR.css";

function Information() {
  return (
    <div>
      <h1 className="city-bike">WELCOME TO CITY BIKE'S</h1>
      <div className="description">
        <div className="each-description">
          <h4>Networks</h4>
          <img className="google-imgs" src={clusterImg} alt="cluster" />
          <p>
            <b>
              The number on the red, blue or yellow markers represents the
              number of networks.
            </b>
          </p>
        </div>
        <div className="each-description">
          <h4>Selected Network</h4>
          <img className="google-imgs" src={networkImg} alt="click-network" />
          <p>
            <b>
              You can choose one of the networks and view the available
              stations.
            </b>
          </p>
        </div>
        <div className="each-description">
          <h4>Stations</h4>
          <img className="google-imgs" src={stations} alt="stations" />
          <p>
            <b>
              After selecting one of the networks, only the stations will appear
              on the map.
            </b>
          </p>
        </div>
        <div className="each-description">
          <h4>Station Detail</h4>
          <img
            className="google-imgs"
            src={stationDetail}
            alt="station-detail"
          />
          <p>
            <b>
              And finally, after clicking on a specific station, you can see
              details about the address, number of bikes available, city, etc.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
