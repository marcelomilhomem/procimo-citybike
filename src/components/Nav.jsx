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
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" alt="" />
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg" alt="" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
