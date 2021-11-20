import React from "react";
import "./NavTab.css";
// import { Link } from 'react-router-dom';

function NavTab(props) {
  return (
    <section className="main__navigation">
      <a className="main__link" href="#aboutProject">О проекте</a>
      <a className="main__link" href="#techs">Технологии</a>
      <a className="main__link" href="#aboutMe">Студент</a>
    </section>
  );
}
export default NavTab;
