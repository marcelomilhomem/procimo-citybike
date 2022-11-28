import React from "react";
import { signOut, getAuth } from "firebase/auth";
import "./Nav.css";

export default function Nav() {

  const auth = getAuth();

  const logout = async () => {
      try {
          await signOut(auth);
          alert(`You're signed out!`);
      } catch (error) {
          alert(error.message);
      }
  };
  
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
            <li>
              <h3>
                <button onClick={logout}>Logout</button>
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
