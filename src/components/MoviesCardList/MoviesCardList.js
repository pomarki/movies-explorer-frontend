import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import InfoMessage from "../InfoMessage/InfoMessage";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  message,
  isOpen,
  movies,
  listTypeSaved,
  onLike,
  likedMovies,
  onDelete,
  isLoading,
}) {
  return (
    <section
      className={`movies-card-list ${
        isOpen && "movies-card-list_opened"
      } page__section`}
    >
      {isLoading && <Preloader />}
      <ul
        className={`movies-card-list__container ${
          !isLoading && "movies-card-list__container_visible"
        }`}
      >
        {movies.map(({ id, ...card }) => (
          <MoviesCard
            key={card.movieId}
            card={card}
            cardId={card.movieId}
            listTypeSaved={listTypeSaved}
            onLike={onLike}
            likedMovies={likedMovies}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <div className="movies-card-list__button-container">
        {!isLoading && <InfoMessage message={message} type={"search"} />}
        <button
          className={`movies-card-list__more-button page__link movies-card-list__more-button_type_inactive ${
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
