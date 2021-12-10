import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isOpen }) {
  
const setActive = ({isActive}) => isActive ? "navigation__link page__link navigation__link_actual" 
: "navigation__link page__link";

  return (
    <div className={`navigation ${isOpen && "navigation_opened"}`}>
    <button className="navigation__close-button page__link"></button>
    <div className="navigation__container">
      <nav className="navigation__links-list">
        <NavLink to="/" className={setActive}>
          Главная
        </NavLink>
        <NavLink to="/movies" className={setActive}>
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className={setActive}>
          Сохранённые фильмы
        </NavLink>
      </nav>
    </div>
    <NavLink to="/profile" className="small-panel__title  page__link">
    <div className="navigation__user">Аккаунт</div>
    </NavLink>
  </div>
  );
}

export default Navigation;
