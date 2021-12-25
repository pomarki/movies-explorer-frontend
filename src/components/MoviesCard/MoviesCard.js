import "./MoviesCard.css";
import { useState } from "react";
import { timeConverter } from "../../utils/utils";

function MoviesCard({
  card,
  listTypeSaved,
  onLike,
  removeUserMovie,
  cardId,
  isLiked,
  likedMovies,
}) {

  /* const [like, setLike] = useState(likedMovies.includes(card.movieId, 0)) */

  let nameRU = card?.nameRU;
  let imgUrl = card?.image;
  let duration = timeConverter(card.duration);
  let buttonType;
  let cardClick;
  let isCardLike;

  listTypeSaved === true
    ? (buttonType = "movies-card__delete-icon")
    : (buttonType = "movies-card__like-ikon");

  listTypeSaved === true ? (cardClick = handleMovieRemove) : (cardClick = handleMovieLike);

 /*  let isCardLike = likedMovies.includes(card.movieId, 0); */
  

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
  removeUserMovie(card._id);
}


  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title">{nameRU}</p>
        <p className="movies-card__duration">{duration}</p>
        <button
          onClick={cardClick}
          className={`page__link movies-card__button ${buttonType} ${
            isCardLike && "movies-card__like-ikon_type_active"
          }`}
        ></button>
      </div>

      <img src={`${imgUrl}`} alt={nameRU} className="movies-card__pic" />
    </li>
  );
}

export default MoviesCard;
