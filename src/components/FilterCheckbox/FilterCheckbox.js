import "./FilterCheckbox.css";

function FilterCheckbox({ onFilter, buttonState }) {
  return (
    <div className="filter-checkbox">
      <button
        onClick={onFilter}
        className={`filter-checkbox__button page__link ${
          !buttonState && "filter-checkbox__button_type_inactive"
        }`}
      >
        <div className="filter-checkbox__toggle"></div>
      </button>
      <p className="filter-checkbox__subtitle">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
