import "./MoviesCardBlock.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardBlock({ block, blockId, activeBlock }) {
  let thisBlockStatus = false;
  if (blockId <= activeBlock) {
    thisBlockStatus = true;
  }
  return (
    <>
      <div className={`movies-block ${thisBlockStatus && "movies-block_active"}`}>
        {block.block.map(({ id, ...card }) => (
          <MoviesCard key={card.movieId} card={card} />
        ))}
      </div>
    </>
  );
}

export default MoviesCardBlock;
