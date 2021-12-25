import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  isOpen,
  movies,
  listTypeSaved,
  onLike,
  likedMovies,
  removeUserMovie,
}) {

  return (
    <section
      className={`movies-card-list ${
        isOpen && "movies-card-list_opened"
      } page__section`}
    >
      <ul className="movies-card-list__container">
        {movies.map(({ id, ...card }) => (
          <MoviesCard
            key={card.movieId}
            card={card}
            cardId={card.movieId}
            listTypeSaved={listTypeSaved}
            onLike={onLike}
            likedMovies={likedMovies}
            removeUserMovie={removeUserMovie}
          />
        ))}
      </ul>
      <div className="movies-card-list__button-container">
        <button
          className={`movies-card-list__more-button page__link ${
            listTypeSaved && "movies-card-list__more-button_type_inactive"
          }`}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
