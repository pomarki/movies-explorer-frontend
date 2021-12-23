import React from "react";
import "./Promo.css";
import { Link } from "react-router-dom";

function Promo({ loggedIn }) {
  let linkDirection;
  loggedIn === true ? (linkDirection = "/movies") : (linkDirection = "/signin");

  return (
    <header className="promo page__section">
      <div className="promo__top">
        <a href="#aboutProject">
          <div className="page__logo page__link"></div>
        </a>
        <div className="promo__authorization-container">
          <Link to="/signup" className="promo__link page__link">
            Регистрация
          </Link>
          <Link to={linkDirection}>
            <button
              type="button"
              className="promo__authorization-button page__link"
            >
              Войти
            </button>
          </Link>
        </div>
      </div>
      <div className="promo__central">
        <h1 className="promo__title">
          Учебный&nbsp;проект студента факультета Веб-разработки.
        </h1>
      </div>
    </header>
  );
}
export default Promo;
