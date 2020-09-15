import React from "react";
import "../css/Resume.css";

const skills = [
  { name: "JavaScript", width: "60%" },
  { name: "React", width: "60%" },
  { name: "Vue.js", width: "20%" },
  { name: "Express.js", width: "30%" },
  { name: "TypeScript", width: "30%" },
  { name: "CSS", width: "60%" },
  { name: "HTML", width: "60%" },
  { name: "MongoDB", width: "30%" },
  { name: "SQL", width: "30%" },
  { name: "GIT", width: "30%" },
  { name: "Adobe Photoshop", width: "40%" },
];

const Skill = ({ name, width }) => {
  return (
    <div className="resume__skill">
      <div className="resume__skillName">{name}</div>
      <div className="resume__skillIndicator">
        <div className="resume__skillProgress" width={width}></div>
      </div>
    </div>
  );
};

function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="container">
        <div className="resume__row resume__education">
          <div className="resume__rowLeftSide">
            <h3 className="resume__title">
              <span>Education</span>
            </h3>
          </div>

          <div className="resume__rowRightSide">
            <h3 className="resume__heading">
              Slovak University of Technology in Bratislava
            </h3>
            <p className="resume__text">
              <i>
                Engineer in Process Automation and Informatization in Industry
              </i>
              <span> • </span>
              July 2020
            </p>
          </div>
        </div>

        <div className="resume__row resume__work">
          <div className="resume__rowLeftSide">
            <h3 className="resume__title">
              <span>Work</span>
            </h3>
          </div>

          <div className="resume__rowRightSide">
            <h3 className="resume__heading">2Ring</h3>
            <p className="resume__text">
              <i>TypeScript & Vue.js</i>
              <span> • </span>
              December 2018 - October 2019
            </p>
            <p className="resume__text">
              Developing web application for call centers
            </p>
          </div>
        </div>

        <div className="resume__row">
          <div className="resume__rowLeftSide">
            <h3 className="resume__title">
              <span>Skills</span>
            </h3>
          </div>
          <div className="resume__rowRightSide">
            <div className="resume__skills">
              {skills.map((skill) => (
                <Skill name={skill.name} width={skill.width} key={skill.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
