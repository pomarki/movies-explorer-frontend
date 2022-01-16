import "./Promo.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

function Promo({ loggedIn }) {
  return (
    <header className="promo page__section">
      <div
        className={`promo__top ${
          loggedIn && "promo__authorization-container_inactive"
        }`}
      >
        <a href="#aboutProject">
          <div className="page__logo page__link"></div>
        </a>
        <div className="promo__authorization-container">
          <Link to="/signup" className="promo__link page__link">
            Регистрация
          </Link>
          <Link to="/movies">
            <button
              type="button"
              className="promo__authorization-button page__link"
            >
              Войти
            </button>
          </Link>
        </div>
      </div>
      <Header promoType={true} isOpen={loggedIn} />
      <div className="promo__central">
        <h1 className="promo__title">
          Учебный&nbsp;проект студента факультета Веб-разработки.
        </h1>
      </div>
    </header>
  );
}
export default Promo;
