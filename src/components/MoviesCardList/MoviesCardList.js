import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isOpen, movies }) {
  return (
    <section
      className={`movies-card-list ${
        isOpen && "movies-card-list_opened"
      } page__section`}
    >
      <ul className="movies-card-list__container">
        {movies.map(({ id, ...card }) => (
          <MoviesCard key={id} card={card} cardId={id} />
        ))}
      </ul>
      <div className="movies-card-list__button-container">
        <button className="movies-card-list__more-button movies-card-list__more-button_type_inactive page__link">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
