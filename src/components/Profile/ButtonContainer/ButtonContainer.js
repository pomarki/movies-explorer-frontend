import "./ButtonContainer.css";

function ButtonContainer({
  type,
  message,
  handleLogout,
  handleUpdateUser,
  handleUpdateForm,
  isValid,
  updateInProgress,
}) {
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
          onClick={handleUpdateForm}
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
        <p className="button-container__error-message">{message}</p>

        <button
          className={`button-container__save-button button-container__save-button_type_edit page__link ${
            (!isValid || updateInProgress) &&
            "button-container__save-button_type_inactive"
          }`}
          id="profile-save-button"
          onClick={handleUpdateUser}
          disabled={!isValid || updateInProgress}
        >
          Сохранить
        </button>
        <button
          className="button-container__button button-container__button_type_out button-container__button_type_out-edit page__link"
          id="profile-out-button"
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
}

export default ButtonContainer;
