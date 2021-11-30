import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isOpen }) {
  return (
    <section className={`navigation ${isOpen && "navigation__popup"}`}>
      <button className="navigation__close-button"></button>
      <div className="navigation__container">
        <ul className="navigation__links-list">
          <li className="navigation__links-element">
            <NavLink to="/">Главная</NavLink>
          </li>
          <li className="navigation__links-element">
            <NavLink to="/">Фильмы</NavLink>
          </li>
          <li className="navigation__links-element">
            <NavLink to="/">Сохранённые фильмы</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navigation;
