import "./MoviesCard.css";
import { useState } from "react";
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

  let isCardLike;
  let nameRU = card?.nameRU;
  let imgUrl = card?.image;
  let duration = timeConverter(card.duration);
  let buttonType;
  let cardClick;

  listTypeSaved === true
    ? (buttonType = "movies-card__delete-icon")
    : (buttonType = "movies-card__like-ikon");

  listTypeSaved === true
    ? (cardClick = handleMovieRemove)
    : (cardClick = handleMovieLike);

    listTypeSaved === true ? isCardLike = "" : isCardLike = likedMovies.find((item) => item.movieId === card.movieId);  

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
