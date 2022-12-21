import React from "react";
import { signOut, getAuth } from "firebase/auth";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {

  const navigate = useNavigate();

  const auth = getAuth();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate('/')
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
              <p>
                <a href="#map-page">Map</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#about-page">About</a>
              </p>
            </li>
          </ul>
          <ul className="flags">
            <li>
              PT
            </li>
            <li>
              EN
            </li>
            <li>
              <button className="logoutbutton" onClick={logout}><i class="fa-solid fa-right-from-bracket"></i></button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
