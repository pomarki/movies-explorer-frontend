import "./ButtonContainer.css";
import resMessages from "../../../utils/response-messages";

function ButtonContainer({ type, handleLogout }) {
  return (
    <>
      <div
        className={`button-container ${
          type && "button-container__type_inactive"
        }`}
      >
        <button
          className="button-container__button button-container__button_type_edit page__link"
          id="profile-edit-button"
        >
          Редактировать
        </button>
        <button
          className="button-container__button button-container__button_type_out page__link"
          id="profile-out-button"
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </button>
      </div>

      <div
        className={`button-container ${
          !type && "button-container__type_inactive"
        }`}
      >
        <p className="button-container__error-message">{resMessages.updateProfileError}</p>

        <button
          className="button-container__save-button page__link"
          id="profile-save-button"
        >
          Сохранить
        </button>
      </div>
    </>
  );
}

export default ButtonContainer;
