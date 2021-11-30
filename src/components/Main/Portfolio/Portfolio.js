import React from "react";
import "./Portfolio.css";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__example-container">
        <div className="portfolio__example-block">
          <a
            href="https://pomarki.github.io/how-to-learn/"
            className="portfolio__example-element"
          >
            Статичный сайт
          </a>
          <div className="portfolio__example-button"></div>
        </div>
        <div className="portfolio__example-block">
          <a
            href="https://pomarki.github.io/russian-travel/index.html"
            className="portfolio__example-element"
          >
            Адаптивный сайт
          </a>
          <div className="portfolio__example-button"></div>
        </div>
        <div className="portfolio__example-block">
          <a
            href="https://pomarki.github.io/mesto/"
            className="portfolio__example-element"
          >
            Одностраничное приложение
          </a>
          <div className="portfolio__example-button"></div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
