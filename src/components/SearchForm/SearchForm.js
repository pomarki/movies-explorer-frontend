import "./SearchForm.css";
import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit, onFilter, buttonState }) {
  const [film, setFilm] = useState("");
  const [isValid, setIsvalid] = useState(true);

  function handleCangeFilm(e) {
    setFilm(e.target.value);
  }

  function emptyForm() {
    setIsvalid(false);
    setFilm("Нужно ввести ключевое слово");
    setTimeout(() => {
      setFilm("");
      setIsvalid(true);
    }, 2000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (film === "") {
      emptyForm();
      return;
    }
    onSubmit(film);
  }

  return (
    <section className="search-form page__section">
      <div className="search-form__container">
        <div className="search-form__search-bar">
          <div className="search-form__info-icon"></div>
          <input
            className="search-form__input"
            required
            disabled={!isValid}
            id="find-film"
            type="text"
            placeholder="Фильм"
            value={film}
            onChange={handleCangeFilm}
          ></input>
          <div className="search-form__find-block">
            <button
              className={`search-form__button page__link ${
                !isValid && "search-form__button_inactive"
              }`}
              type="button"
              onClick={handleSubmit}
              disabled={!isValid}
            ></button>
            <div className="search-form__break-line"></div>
            <div className="search-form__filter-container search-form__filter-container_type_in">
              <FilterCheckbox onFilter={onFilter} buttonState={buttonState} />
            </div>
          </div>
        </div>
        <div className="search-form__filter-container search-form__filter-container_type_out">
          <FilterCheckbox onFilter={onFilter} buttonState={buttonState} />
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
