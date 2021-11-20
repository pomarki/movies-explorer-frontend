import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header__top">
        <a href="#aboutProject">
          <div className="header__logo"></div>
        </a>
        <div className="header__authorization-container">
          <Link to="/" className="header__link">
            Регистрация
          </Link>
          <button type="button" className="header__authorization-button">
            Войти
          </button>
        </div>
      </div>
      <div className="header__central">
        <h1 className="header__title">
          Учебный&nbsp;проект&nbsp;студента факультета Веб-разработки
        </h1>
      </div>
    </header>
  );
}
export default Header;
