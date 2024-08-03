import React from "react";
import Links from "./Links";

function About({ about={} }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      
      {about.bio && <p>{about.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <div><Links links={about.links} /></div>
    </div>
  );
}

export default About;
