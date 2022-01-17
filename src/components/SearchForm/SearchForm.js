import "./SearchForm.css";
import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import InfoMessage from "../InfoMessage/InfoMessage";

function SearchForm({ onSubmit, onFilter, buttonState, isLoading, message, searchQuery }) {
  const [film, setFilm] = useState(searchQuery || "");
  const [isValid, setIsvalid] = useState(true);

  function handleChangeFilm(e) {
    setFilm(e.target.value);
  }

  function warnEmptyForm() {
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
      warnEmptyForm();
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
            onChange={handleChangeFilm}
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
        {!isLoading && <InfoMessage message={message} type={"search"} />}
      </div>
    </section>
  );
}

export default SearchForm;
