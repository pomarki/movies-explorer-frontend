import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {initialCards} from "../../../consts/initial-cards";

function MoviesCardList(props) {
    console.log(initialCards[0].nameRU);
  return (
    <section className="movies-card-list page__section">
      <div className="movies-card-list__container">
          <MoviesCard initialCards={initialCards} />
      </div>
      <button className="movies-card-list__more-button page__link">Ещё</button>
    </section>
  );
}

export default MoviesCardList;