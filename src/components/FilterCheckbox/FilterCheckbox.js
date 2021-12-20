import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  return (
    <div className="filter-checkbox">
      <div className="filter-checkbox__button page__link">
        <div className="filter-checkbox__toggle"></div>
      </div>
      <p className="filter-checkbox__subtitle">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
