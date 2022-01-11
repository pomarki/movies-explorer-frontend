import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";

function MoviesCardList({
  message,
  isOpen,
  movies,
  savedMovies,
  listTypeSaved,
  onLike,
  likedMovies,
  onDelete,
  isLoading,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [blockSize, setBlockSize] = useState(window.innerWidth > 321 ? 7 : 5);
  const [lastRenderedIndex, setLastRenderedIndex] = useState(0);
  const [searchResult, setSearchResult] = useState([]); // записываю результат поиска из movies
  const [activeButton, setActiveButton] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  // let moviesList = [];

  // синхронизируй стейт movies!

  const changeBlockSize = (scale) => {
    if (scale > 321) {
      return setBlockSize(7);
    } else {
      return setBlockSize(5);
    }
  };

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setSearchResult(movies);
    setActiveButton(movies.length > blockSize ? true : false);
    setMoviesList(() => sliceMoviesArray(blockSize, 0, searchResult));
    
  }, [movies, blockSize, searchResult]);

/*   useEffect(() => {
    setActiveButton(false);
  }, [isLoading]); */

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    changeBlockSize(windowWidth);
  }, [windowWidth]);

  function sliceMoviesArray(chunk, firstIndex, movies) {
    let result;
    let lastIndex = firstIndex + chunk;

    setActiveButton(true);

    if (movies.length === 0) {
      result = [];
      setActiveButton(false);
      return result;
    }

    if (lastIndex > movies.length) {
      lastIndex = movies.length;
      setActiveButton(false);
    }

    result = movies.slice(firstIndex, lastIndex);
    setLastRenderedIndex(lastIndex);

    return result;
  }

  const addMoviesBlock = (block, list) => {
    setMoviesList([...list, ...block]);
  };

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
        {moviesList.map(({ movieId, ...card }) => (
          <MoviesCard
            key={movieId}
            card={card}
            listTypeSaved={listTypeSaved}
            onLike={onLike}
            savedMovies={savedMovies}
            likedMovies={likedMovies}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <div className="movies-card-list__button-container">
        <button
          className={`movies-card-list__more-button page__link ${
            !activeButton && "movies-card-list__more-button_type_inactive"
          }`}
          onClick={() =>
            addMoviesBlock(
              sliceMoviesArray(blockSize, lastRenderedIndex, searchResult),
              moviesList
            )
          }
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
