import "./MoviesCard.css";
import { useState } from "react";
import { baseUrl } from "../../consts/base-URL";
import { timeConverter } from "../../utils/utils";

function MoviesCard({ card, cardId, listTypeSaved }) {
  let nameRU = card?.nameRU;
  let imgUrl = card?.image?.formats?.thumbnail?.url;
  let duration = timeConverter(card.duration);
  let buttonType;
  let cardClick;

  listTypeSaved === true
    ? (buttonType = "movies-card__delete-icon")
    : (buttonType = "movies-card__like-ikon");

  listTypeSaved === true ? (cardClick = null) : (cardClick = handleCardLike);

  const [isCardLike, setCardLike] = useState(false);
  function handleCardLike() {
    setCardLike(!isCardLike);
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

      <img src={`${baseUrl + imgUrl}`} alt={nameRU} className="movies-card__pic" />
    </li>
  );
}

export default MoviesCard;
