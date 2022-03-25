import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio page__section">
      <div className="portfolio__example-container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links-list">
          <li className="portfolio__links-list-element">
            <div className="portfolio__example-block page__link">
              <a
                href="https://pomarki.github.io/how-to-learn/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__example-element"
              >
                Статичный сайт
              </a>
              <div className="portfolio__example-button"></div>
            </div>
          </li>
          <li className="portfolio__links-list-element">
            <div className="portfolio__example-block page__link">
              <a
                href="https://pomarki.github.io/russian-travel/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__example-element"
              >
                Адаптивный сайт
              </a>
              <div className="portfolio__example-button"></div>
            </div>
          </li>
          <li className="portfolio__links-list-element">
            <div className="portfolio__example-block page__link">
              <a
                href="https://pomarki.github.io/mesto/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__example-element"
              >
                Одностраничное приложение
              </a>
              <div className="portfolio__example-button"></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Portfolio;
