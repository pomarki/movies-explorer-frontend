import "./MoviesCardBlock.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardBlock({
  block,
  blockId,
  activeBlock,
  listTypeSaved,
  onLike,
  likedMovies,
  onDelete,
}) {
  let thisBlockStatus = false;
  if (blockId <= activeBlock) {
    thisBlockStatus = true;
  }
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
            likedMovies={likedMovies}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}

export default MoviesCardBlock;
