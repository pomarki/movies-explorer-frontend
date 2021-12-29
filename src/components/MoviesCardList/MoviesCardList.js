import "./MoviesCardList.css";
import MoviesCardBlock from "../MoviesCardBlock/MoviesCardBlock";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";

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
  const [activeBlockId, setActiveBlockId] = useState(0);
  const [lastBlock, setLastBlock] = useState(false);

  const screenWidth = window.innerWidth;
  let chunk;
  screenWidth > 320 ? (chunk = 7) : (chunk = 5);

  useEffect(() => {
    setActiveBlockId(0);
    setLastBlock(false);
  }, [isLoading]);

  function cutArray(array, divider) {
    let result = [];
    let iterations;
    array.length % divider === 0
      ? (iterations = array.length / divider)
      : (iterations = Math.floor(array.length / divider) + 1);

    for (let i = 0; i < iterations; i++) {
      let arr = array.slice(i * divider, i * divider + divider);
      result.push({ id: i, block: arr });
    }

    return result;
  }

  let preparedArr = cutArray(movies, chunk);

  function handleClick() {
    setActiveBlockId(activeBlockId + 1);
    if (activeBlockId === preparedArr.length - 2) {
      setLastBlock(true);
    }
  }

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
        {preparedArr.map(({ id, ...block }) => (
          <MoviesCardBlock
            key={id}
            blockId={id}
            block={block}
            activeBlock={activeBlockId}
            listTypeSaved={listTypeSaved}
            onLike={onLike}
            likedMovies={likedMovies}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <div className="movies-card-list__button-container">
        <button
          className={`movies-card-list__more-button page__link ${
            lastBlock && "movies-card-list__more-button_type_inactive"
          }`}
          onClick={handleClick}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
