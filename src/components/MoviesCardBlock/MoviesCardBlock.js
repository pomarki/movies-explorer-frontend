import "./MoviesCardBlock.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardBlock({
  block,
  blockId,
  activeBlock,
  listTypeSaved,
  onLike,
  /* likedMovies, */
  savedMovies,
  onDelete,
}) {
  let thisBlockStatus = false;
  if (blockId <= activeBlock) {
    thisBlockStatus = true;
  }


  function comparisonArrows(filterArr, savedArr) {
    let result = [];

    for (let i = 0; i < savedArr.length; i++) {
      for (let j = 0; j < filterArr.length; j++) {
        if (savedArr[i].movieId === filterArr[j].movieId) {
          result.push(savedArr[i]);
        }
      }
    }

    return result;
  }

  const different = comparisonArrows(block.block, savedMovies);

  console.log(block.block)

  return (
    <>
      <div
        className={`movies-block ${thisBlockStatus && "movies-block_active"}`}
      >
        {block.block.map(({ id, ...card }) => (
          <MoviesCard
            key={card.movieId}
            card={card}
            cardId={card.movieId}
            listTypeSaved={listTypeSaved}
            onLike={onLike}
            likedMovies={different}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}

export default MoviesCardBlock;
