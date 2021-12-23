import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound({ isOpen }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className={`page-not-found ${isOpen && "page-not-found_opened"}`}>
      <div className="page-not-found__container">
        <p className="page-not-found__title">404</p>
        <p className="page-not-found__subtitle">Страница не найдена</p>
        <button onClick={goBack} className="page-not-found__link page__link">
          Назад
        </button>
      </div>
    </section>
  );
}

export default PageNotFound;
