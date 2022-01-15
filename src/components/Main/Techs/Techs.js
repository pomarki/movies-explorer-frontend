import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section id="techs" className="techs page__section">
      <div className="techs__title-container page__section-title-container">
        <h2 className="page__section-title techs__title">Технологии</h2>
      </div>
      <p className="techs__main-text">7 технологий</p>
      <div className="techs__paragraph-container">
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className="techs__diagram">
        <ul className="techs__diagram-list">
          <li className="techs__diagram-list-element">
            <div className="techs__diagram-block">HTML</div>
          </li>
          <li className="techs__diagram-list-element">
            <div className="techs__diagram-block">CSS</div>
          </li>
          <li className="techs__diagram-list-element">
            <div className="techs__diagram-block">JS</div>
          </li>
          <li className="techs__diagram-list-element">
            <div className="techs__diagram-block">React</div>
          </li>
          <li className="techs__diagram-list-element">
            <div className="techs__diagram-block">Git</div>
          </li>
          <li className="techs__diagram-list-element">
            <div className="techs__diagram-block">Express.js</div>
          </li>
          <li className="techs__diagram-list-element">
            <div className="techs__diagram-block">mongoDB</div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Techs;
