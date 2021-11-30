import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className="header page__section">
      <div className="header__container">
        <div className="page__logo"></div>
        <Navigation isOpen={true} />
        <div className="header__user">Аккаунт</div>
      </div>
      
    </header>
  );
}

export default Header;
