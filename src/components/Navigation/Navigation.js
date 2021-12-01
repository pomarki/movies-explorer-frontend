import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isOpen, navTypeSmall }) {
  const sectionVisible = isOpen ? "navigation_opened" : "";
  const buttonVisible = navTypeSmall ? "" : "navigation__close-button_visible";
  const mainLinkVisible = navTypeSmall ? "navigation__link_invisible" : "";
  const navigationType = navTypeSmall
    ? "navigation_type_small"
    : "navigation_type_big";
  const navContainerType = navTypeSmall
    ? "navigation__container_type_small"
    : "navigation_type_big";

  const navUserType = navTypeSmall
    ? "navigation__user_type_small"
    : "navigation__user_type_big";

  const navLinkType = navTypeSmall
    ? "navigation__link_type_small"
    : "navigation__link_type_big";

  const navLinkListType = navTypeSmall ? "navigation__links-list_type_small" : "";
  return (
    <div className={`navigation ${sectionVisible} ${navigationType}`}>
      <button
        className={`navigation__close-button page__link ${buttonVisible}`}
      ></button>
      <div className={`navigation__container ${navContainerType}`}>
        <nav className={`navigation__links-list ${navLinkListType}`}>
          <NavLink
            to="/"
            className={`navigation__link page__link ${mainLinkVisible}`}
          >
            Главная
          </NavLink>
          <NavLink
            to="/"
            className={`navigation__link navigation__link page__link ${navLinkType}`}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/"
            className={`navigation__link navigation__link page__link ${navLinkType}`}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
      </div>
      <div className={`navigation__user ${navUserType}`}>Аккаунт</div>
    </div>
  );
}

export default Navigation;
