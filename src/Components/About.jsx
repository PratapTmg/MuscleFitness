import React from "react";
import aboutimage from "../Images/aboutUs.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="/" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          You can join our best Fitness world in the top of the world which
          makes your size more increadable
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default About;
