import React from "react";
import "./Techs.css";

function Techs(props) {
  return (
    <section id="techs" className="techs">
      <div className="tech__title-container">
        <h2 class="tech__title">Технологии</h2>
      </div>
      <p className="tech__main-text">7 технологий</p>
      <div className="tech__paragraph-container">
        <p className="tech__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className="tech__diagram">
        <div className="tech__diagram-block">HTML</div>
        <div className="tech__diagram-block">CSS</div>
        <div className="tech__diagram-block">JS</div>
        <div className="tech__diagram-block">React</div>
        <div className="tech__diagram-block">Git</div>
        <div className="tech__diagram-block">Express.js</div>
        <div className="tech__diagram-block">MongoDB</div>
      </div>
    </section>
  );
}
export default Techs;
