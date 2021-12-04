import React from "react";
import "./NavTab.css";
// import { Link } from 'react-router-dom';

function NavTab(props) {
  return (
    <section className="main__navigation page__section">
      <a className="page__link main__link" href="#aboutProject">О проекте</a>
      <a className="page__link main__link" href="#techs">Технологии</a>
      <a className="page__link main__link" href="#aboutMe">Студент</a>
    </section>
  );
}
export default NavTab;
