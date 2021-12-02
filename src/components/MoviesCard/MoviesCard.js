import "./MoviesCard.css";
import { baseUrl } from "../../consts/base-URL";
import { timeConverter } from "../../utils/utils";

function MoviesCard({ card, cardId }) {
  let nameRU = card?.nameRU;
  let imgUrl = card?.image?.formats?.thumbnail?.url;
  let duration = timeConverter(card.duration);
  
  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title">{nameRU}</p>
        <p className="movies-card__duration">{duration}</p>
        <div className="movies-card__like-ikon page__link movies-card__delete-icon"></div>
      </div>
      <div
        className="movies-card__pic"
        alt={nameRU}
        style={{
          backgroundImage: `url(${baseUrl + imgUrl})`,
        }}
      ></div>
    </li>
  );
}

export default MoviesCard;
