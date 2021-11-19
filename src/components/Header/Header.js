import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header__top">
      <div className="header__logo"></div>
      <div className="header__authorization-container">
          <p className="header__info-text">Регистрация</p>
          <button type="button" className="header__authorization-button">Войти</button>
      </div>
      </div>
      <div className="header__central">
          <h1 className="header__title">Учебный&nbsp;проект&nbsp;студента факультета Веб-разработки</h1>
      </div>
    </header>
  );
}
export default Header;
