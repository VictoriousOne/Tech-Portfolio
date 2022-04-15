import React from 'react';
import aboutMeImage from "../../assets/images/myAvatar.png";

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img src={aboutMeImage} style={{ width: "15%", height: "15%" }} alt="About Me" />
    </section>
  );
}

export default About;