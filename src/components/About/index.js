import React from 'react';
import aboutMeImage from "../../assets/images/myAvatar.png";

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img src={aboutMeImage} style={{ width: "15%", height: "15%" }} alt="About Me" />
      <br></br>
      <p>Hello, my name is Kerry Long and I'm a current student in MSU's MERN bootcamp. This boot camp has been 
        intense, but fun. I'm eager to start using my new and revived skills for a prospective employer.
        I'm currently employed as a Instructional Assistant for special needs children. I have an IT background 
        and I'm ready to get back in the IT field.

      </p>
    </section>
  );
}

export default About;