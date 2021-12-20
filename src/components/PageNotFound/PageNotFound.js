import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound({ isOpen }) {
  return (
    <section className={`page-not-found ${isOpen && "page-not-found_opened"}`}>
      <div className="page-not-found__container">
        <p className="page-not-found__title">404</p>
        <p className="page-not-found__subtitle">Страница не найдена</p>
        <Link to="/" className="page-not-found__link page__link">
          Назад
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
