import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="divs">
        <div>
          <a
            href="https://www.linkedin.com/in/marcelo-milhomem-79696422b/"
            target="linkedin"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div>
          <a href="https://github.com/marcelomilhomem" target="github">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
