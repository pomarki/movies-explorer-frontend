import React from "react";
import "./Footer.css";

function Footer({ isOpen }) {
  return (
    <section className={`footer ${isOpen && "footer_opened"} page__section`}>
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <div className="footer__links-block">
          <a href="https://practicum.yandex.ru" className="footer__link page__link">
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/yandex-praktikum"
            className="footer__link page__link"
          >Github</a>
          <a
            href="https://www.facebook.com/yandex.practicum"
            className="footer__link page__link"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
export default Footer;
