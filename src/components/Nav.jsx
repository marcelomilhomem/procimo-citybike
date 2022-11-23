import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="div-nav">
      <div>
        <nav>
          <ul>
            <li>
              <h3>
                <a href="#map-page">Map</a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="#about-page">About</a>
              </h3>
            </li>
          </ul>
          <ul className="flags">
            <li>
              PT
            </li>
            <li>
              EN
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
