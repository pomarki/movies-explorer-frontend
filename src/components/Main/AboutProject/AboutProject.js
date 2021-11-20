import React from "react";
import "./AboutProject.css";

function AboutProject(props) {
  return (
    <section id="aboutProject" className="about">
      <div className="about__title-container">
        <h2 class="about__title">О проекте</h2>
      </div>
      <div className="about__info-container">
        <div className="about__info-block">
          <p className="about__subtitle">Дипломный проект включал 5 этапов</p>
          <p className="about_paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__info-block">
          <p className="about__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="about_paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__diagram">
        <div className="about__diagram-block about__diagram-block_size_s">
          <p className="about__diagram-subtitle">1 неделя</p>
        </div>
        <div className="about__diagram-block about__diagram-block_size_l">
        <p className="about__diagram-subtitle">4 недели</p>
        </div>
        <div className="about__diagram-block">
          <p className="about__diagram-caption">Back-end</p>
        </div>
        <div className="about__diagram-block">
        <p className="about__diagram-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}
export default AboutProject;
