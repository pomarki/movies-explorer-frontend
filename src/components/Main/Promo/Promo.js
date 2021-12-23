import React, { useContext } from "react";
import "./Promo.css";
import { Link } from "react-router-dom";
/* import { CurrentUserContext } from "../../contexts/CurrentUserContext"; */

function Promo() {
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
          <Link to="/movies">
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
