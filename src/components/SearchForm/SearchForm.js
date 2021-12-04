import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  return (
    <section className="search-form page__section">
      <div className="search-form__container">
        <div className="search-form__search-bar">
          <div className="search-form__info-icon"></div>
          <input
            className="search-form__input"
            id="find-film"
            type="text"
            placeholder="Фильм"
          ></input>
          <div className="search-form__find-block">
            <button
              className="search-form__button page__link"
              type="button"
            ></button>
            <div className="search-form__break-line"></div>
            <div className="search-form__filter-container">
              <FilterCheckbox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
