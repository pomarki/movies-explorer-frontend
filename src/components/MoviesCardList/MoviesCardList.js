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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [chunk, setChunk] = useState(5);
  const [preparedArr, setPreparedArr] = useState([]);

  const handleChunk = (scale) => {
    if (scale > 321) {
      setChunk(7);
    } else {
      setChunk(5);
    }
  };

  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setActiveBlockId(0);
    setLastBlock(false);
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleChunk(window.innerWidth);
    setPreparedArr(cutArray(movies, chunk));
    window.removeEventListener("resize", handleWindowResize);
  }, [screenWidth]);

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
          Ещё {screenWidth}
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
