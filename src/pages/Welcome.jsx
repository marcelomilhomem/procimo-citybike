import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcomeDiv">
      {/* <h2>CITY BIKES</h2> */}
      <div className="img-and-button">
        <div>
          <p>
            This was a challenge I received for a job and it was very
            challenging. Basically it's a map where you can find bike stations.
          </p>
          <button>Check Networks</button>
        </div>
        <div>
          <img
            src="https://s.yimg.com/uu/api/res/1.2/_dU93vTkomDU5Bqmq3er4g--~B/Zmk9ZmlsbDtoPTQzNDt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-08/78cdec60-00d8-11ec-b7fe-677744b76872.cf.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
