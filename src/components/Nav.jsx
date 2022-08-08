import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="div-nav">
      <nav>
        <ul>
          <li>
            <h6>Bike's Network</h6>
          </li>
          <li>
            <img
              src="https://preview.pixlr.com/images/800wm/100/1/100138419.jpg"
              alt="bike-logo"
              className="bike-logo"
            />
          </li>
          <li>
            <h6>About</h6>
          </li>
        </ul>
      </nav>
    </div>
  );
}
