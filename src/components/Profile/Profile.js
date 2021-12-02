import "./Profile.css";
import Header from "../Header/Header";
const userName = "Денис";
const userEmail = "denis.shalaew@yandex.ru";

function Profile(props) {
  return (
    <section className="profile page__section">
      <Header isOpen={true} navTypeSmall={true} />
      <div className="profile__container profile__container_opened">
        <p className="profile__title">Привет, {userName}</p>
        <div className="profile__info-container">
          <div className="profile__info-block">
            <p className="profile__info-subtitle">Имя</p>
            <p className="profile__info-subtitle">{userName}</p>
          </div>
          <div className="profile__break_line"></div>
          <div className="profile__info-block">
            <p className="profile__info-subtitle">Почта</p>
            <p className="profile__info-subtitle">{userEmail}</p>
          </div>
          <div className="profile__button-container">
            <button
              className="profile__button profile__button_type_edit page__link"
              id="profile-edit-button"
            >Редактировать</button>
            <button
              className="profile__button profile__button_type_out page__link"
              id="profile-out-button"
            >Выйти из аккаунта</button>
          </div>
        </div>
      </div>
      <div className="profile__container">
        <div className="profile__edit-form">
          <div className="profile__info-block">
            <p className="prfile__info-subtitle">Имя</p>
            <input
              className="profile__input"
              id="profile-name"
              type="text"
            ></input>
          </div>
          <div className="profile__info-block">
            <p className="prfile__info-subtitle">Почта</p>
            <input
              className="profile__input"
              id="profile-email"
              type="text"
            ></input>
          </div>
        </div>
        <div className="profile__button-container">
          <p className="profile__error-message"></p>
          <button
            className="profile__save-button page__link"
            id="profile-save-button"
          ></button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
