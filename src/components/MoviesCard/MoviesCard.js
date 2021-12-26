import "./MoviesCard.css";

import { timeConverter } from "../../utils/utils";

function MoviesCard({
  card,
  listTypeSaved,
  onLike,
  onDelete,
  cardId,
  isLiked,
  likedMovies,
}) {
  let isCardLike = false;
  let nameRU = card?.nameRU;
  let imgUrl = card?.image;
  let duration = timeConverter(card.duration);

  listTypeSaved === true
    ? (isCardLike = false)
    : (isCardLike = likedMovies.find((item) => item.movieId === card.movieId));

  function handleMovieLike() {
    onLike({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: card.image,
      trailer: card.trailer,
      thumbnail: card.thumbnail,
      movieId: card.movieId,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    });
  }
  function handleMovieRemove() {
    onDelete(card._id);
  }

  function handleMovieDislike() {
    onDelete(getLikedmovieId(card, likedMovies));
  }

  function getLikedmovieId(movieCard, likedMoviesArrow) {
    let id = movieCard.movieId;
    let currentArr = likedMoviesArrow.filter((item) => item.movieId === id);
    return currentArr[0]._id;
  }

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title">{nameRU}</p>
        <p className="movies-card__duration">{duration}</p>
        <button
          onClick={handleMovieLike}
          className={`page__link movies-card__button movies-card__like-ikon ${
            (listTypeSaved || isCardLike) && "movies-card__button_invisible"
          }`}
        ></button>
        <button
          onClick={handleMovieDislike}
          className={`page__link movies-card__button movies-card__like-ikon movies-card__like-ikon_type_active ${
            (listTypeSaved || !isCardLike) && "movies-card__button_invisible"
          } `}
        ></button>
        <button
          onClick={handleMovieRemove}
          className={`page__link movies-card__button movies-card__delete-icon ${
            !listTypeSaved && "movies-card__button_invisible"
          }`}
        ></button>
      </div>

      <img src={`${imgUrl}`} alt={nameRU} className="movies-card__pic" />
    </li>
  );
}

export default MoviesCard;
