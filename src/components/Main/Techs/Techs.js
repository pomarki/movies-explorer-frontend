import React from "react";
import "./Techs.css";

function Techs(props) {
  return (
    <section id="techs" className="techs page__section">
      <div className="tech__title-container page__section-title-container">
        <h2 class="page__section-title tech__title">Технологии</h2>
      </div>
      <p className="tech__main-text">7 технологий</p>
      <div className="tech__paragraph-container">
        <p className="tech__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className="tech__diagram">
        <ul className="tech__diagram-list">
          <li className="tech__diagram-list-element">
            <div className="tech__diagram-block">HTML</div>
          </li>
          <li className="tech__diagram-list-element">
            <div className="tech__diagram-block">CSS</div>
          </li>
          <li className="tech__diagram-list-element">
            <div className="tech__diagram-block">JS</div>
          </li>
          <li className="tech__diagram-list-element">
            <div className="tech__diagram-block">React</div>
          </li>
          <li className="tech__diagram-list-element">
            <div className="tech__diagram-block">Git</div>
          </li>
          <li className="tech__diagram-list-element">
            <div className="tech__diagram-block">Express.js</div>
          </li>
          <li className="tech__diagram-list-element">
            <div className="tech__diagram-block">MongoDB</div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Techs;
