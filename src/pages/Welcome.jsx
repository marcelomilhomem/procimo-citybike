import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcomeDiv">
      <div className="info-div">
        <div>
          <h5 className="welcome-h5">find your bike with us</h5>
          <p className="text-welcome">
            This was a challenge I received for a job and it was very
            challenging. Basically it's a map where you can find bike stations.
          </p>
          <div className="buttons-div">
            <div>
              <a className="buttons" href="https://github.com/marcelomilhomem" target="_blank">My Github</a >
            </div>
            <div>
              <a className="buttons" href="https://www.linkedin.com/in/marcelo-milhomem-79696422b/" target="_blank">My Linkedin</a >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
