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
            Я московский озорной гуляка. По всему тверскому околотку В переулках
            каждая собака Знает мою легкую походку. Каждая задрипанная лошадь
            Головой кивает мне навстречу. Для зверей приятель я хороший, Каждый
            стих мой душу зверя лечит. Я хожу в цилиндре не для женщин - В
            глупой страсти сердце жить не в силе,- В нем удобней, грусть свою
            уменьшив, Золото овса давать кобыле.
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
