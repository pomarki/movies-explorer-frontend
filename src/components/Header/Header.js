import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isOpen, navTypeSmall }) {
  return (
    <header className={`header page__section ${isOpen && "header_opened"}`}>
      <div className="header__container">
        <div className="page__logo"></div>
        <div className="header__navigation-container">
          <Navigation isOpen={true} navTypeSmall={navTypeSmall} />
        </div>
      </div>
    </header>
  );
}

export default Header;
