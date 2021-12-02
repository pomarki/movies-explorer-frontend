import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { initialCards } from "../../../consts/initial-cards";

function MoviesCardList(props) {
  return (
    <section className="movies-card-list page__section">
      <ul className="movies-card-list__container">
        {initialCards.map(({ id, ...card }) => (
          <MoviesCard key={id} card={card} cardId={id} />
          
        ))}
      </ul>
      <button className="movies-card-list__more-button page__link">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
