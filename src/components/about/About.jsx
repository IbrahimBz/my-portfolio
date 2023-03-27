import React from "react";
import Me from "./Me";
import Infromation from "./Infromation";
import InfoText from "./InfoText";

const About = () => (
  <section id="about" className="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about-container">
      <Me />
      <div className="info">
        <Infromation />
        <InfoText />
      </div>
    </div>
  </section>
);
export default About;
