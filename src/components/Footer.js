import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="scrollUp">
        <a href="#home">
          <i className="fas fa-chevron-circle-up"></i>
        </a>
      </div>

      <div className="footer__text">
        <p>© 2020 Boris Ravas</p>
      </div>
    </div>
  );
}

export default Footer;
