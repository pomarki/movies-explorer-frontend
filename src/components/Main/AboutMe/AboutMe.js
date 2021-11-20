import React from "react";
import "./AboutMe.css";

function AboutMe(props) {
  return (
    <section id="aboutMe" className="portfolio">
      <div className="portfolio__title-container">
          <h2 className="portfolio__title">Студент</h2>
      </div>
      <div className="portfolio__info-container"></div>
      <p className="portfolio__subtitle"></p>
      <div className="portfolio__example-container">
          <div className="portfolio__example-block"></div>
          <div className="portfolio__example-block"></div>
          <div className="portfolio__example-block"></div>
      </div>
    </section>
  );
}
export default AboutMe;
