import React from "react";
import "./AboutMe.css";
import den from "../../../images/den.png";

function AboutMe(props) {
  return (
    <section id="aboutMe" className="about-me page__section">
      <div className="about-me__title-container page__section-title-container">
        <h2 className="page__section-title">Студент</h2>
      </div>
      <div className="about-me__info-container">
        <div className="about-me__paragraph">
          <p className="about-me__name">Денис</p>
          <p className="about-me__subtitle">Фронтенд-разработчик, 47 лет</p>
          <p className="about-me__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="about-me__contact-links">
            <a
              href="https://www.facebook.com/pomarki"
              className="about-me__link page__link"
            >
              Facebook
            </a>
            <a
              href="https://github.com/pomarki"
              className="about-me__link page__link"
            >
              Github
            </a>
          </div>
        </div>
        <img src={den} alt="Денис" className="about-me__photo" />
      </div>
    </section>
  );
}
export default AboutMe;
