import "./SmallNavigationPanel.css";
import { NavLink } from "react-router-dom";

function SmallPanel({ isOpen }) {
  const setActive = ({ isActive }) =>
    isActive
      ? "small-panel__link page__link small-panel__link_actual"
      : "small-panel__link page__link";

  return (
    <div className={`small-panel ${isOpen && "small-panel_opened"}`}>
      <div className="small-panel__container">
        <nav className="small-panel__links-list">
          <NavLink to="/movies" className={setActive}>
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className={setActive}>
            Сохранённые фильмы
          </NavLink>
        </nav>
      </div>
      <NavLink to="/profile" className="small-panel__title  page__link">
        <div className="small-panel__user">Аккаунт</div>
      </NavLink>
    </div>
  );
}

export default SmallPanel;
