import React from "react";

const About = ({ logoSrc, aboutText }) => {
  return (
    <aside>
      {image && <img src={image} alt="blog logo" />}
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;
