import React from "react";
import "../css/About.css";

import image from "../images/profile_photo.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="container about__container">
        <div className="about__image">
          <img src={image} alt="profile" />
        </div>
        <div className="about__main">
          <div className="about__me">
            <h2>About Me</h2>
            <p>
              My name is Boris, fresh absolvent of university, who is currently
              looking for React job in Brno.
            </p>
          </div>
          <div className="about__contact">
            <h2>Contact Details</h2>
            <p>Boris Ravas</p>
            <p>Slnenčná 20</p>
            <p>Skalica SVK, 909 01</p>
            <p>+421 902 062 760</p>
            <p>ravas.boris@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
