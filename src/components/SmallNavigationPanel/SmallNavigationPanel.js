import "./SmallNavigationPanel.css";
import { NavLink } from "react-router-dom";

function SmallNavigationPanel({ isOpen, promoType }) {

  let linkClassName;

  promoType ? (linkClassName = " small-panel__link_promo") : (linkClassName = "");
  const setActive = ({ isActive }) =>
    isActive
      ? "small-panel__link page__link small-panel__link_actual" + linkClassName
      : "small-panel__link page__link" + linkClassName

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

export default SmallNavigationPanel;
