import React from "react";
import "./AboutProject.css";

function AboutProject(props) {
  return (
    <section id="aboutProject" className="about-project page__section">
      <div className="about-project__title-container page__section-title-container">
        <h2 className="page__section-title">О проекте</h2>
      </div>
      <div className="about-project__info-container">
        <div className="about-project__info-block">
          <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
          <p className="about-project_paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info-block">
          <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="about-project_paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__diagram">
        <div className="about-project__diagram-block about-project__diagram-block_size_s">
          <p className="about-project__diagram-subtitle">1 неделя</p>
        </div>
        <div className="about-project__diagram-block about-project__diagram-block_size_l">
        <p className="about-project__diagram-subtitle">4 недели</p>
        </div>
        <div className="about-project__diagram-block">
          <p className="about-project__diagram-caption">Back-end</p>
        </div>
        <div className="about-project__diagram-block">
        <p className="about-project__diagram-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}
export default AboutProject;
