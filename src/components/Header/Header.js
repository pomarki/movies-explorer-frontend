import "./Header.css";
import SmallPanel from "../SmallNavigationPanel/SmallNavigationPanel";
import { Link } from "react-router-dom";

function Header({ isOpen, navOpen }) {
  return (
    <header className={`header page__section ${isOpen && "header_opened"}`}>
      <div className="header__container">
        <Link to="/">
          <div className="page__logo page__link"></div>
        </Link>
        <div
          className={`header__navigation-container ${
            !navOpen && "header__navigation-container_inactive"
          }`}
        >
          <SmallPanel isOpen={navOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
