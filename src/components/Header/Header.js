import { useState } from "react";
import "./Header.css";
import SmallNavigationPanel from "../SmallNavigationPanel/SmallNavigationPanel";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ promoType, isOpen }) {
  const [isPopupNavigationOpen, setStateNavigate] = useState(false);

  function handleNavigationOpen() {
    setStateNavigate(true);
  }

  function handleNavigationClose() {
    setStateNavigate(false);
  }

  return (
    <header
      className={`header page__section ${promoType && "header_type_promo"} ${
        !isOpen && "header_type_inactive"
      }`}
    >
      <div className="header__container">
        <Link to="/">
          <div className="page__logo page__link"></div>
        </Link>
        <div
          className={`header__navigation-container ${
            isPopupNavigationOpen && "header__navigation-container_inactive"
          }`}
        >
          <SmallNavigationPanel
            isOpen={!isPopupNavigationOpen}
            promoType={promoType}
          />
        </div>
        <button
          id="header-navigation-button"
          className="header__navigation-button page__link"
          onClick={handleNavigationOpen}
        ></button>
      </div>
      <Navigation
        isOpen={isPopupNavigationOpen}
        onClose={handleNavigationClose}
      />
    </header>
  );
}

export default Header;
