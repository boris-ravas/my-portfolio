import React, { useEffect, useState } from "react";
import "../css/Header.css";

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="header" id="home">
      <div className={`header__nav ${show && "header__navHide"}`}>
        <ul>
          <li>
            <a className="header__navLink" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="header__navLink" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="header__navLink" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="header__navLink" href="#works">
              Works
            </a>
          </li>
        </ul>
      </div>

      <div className="header__banner">
        <div className="header__title">
          <h1>I'm Boris Ravas.</h1>
        </div>
        <div className="header__text">
          <h3>
            I'm a Skalica based Junior Frontend Developer. I'm focused mainly on
            React, but also interested in Node.js Backend.
          </h3>
        </div>
        <div className="header__links">
          <a
            href="https://www.facebook.com/boris.ravas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://github.com/boris-ravas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="scrollDown">
        <a href="#about">
          <i className="fas fa-chevron-circle-down"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
