import "./Profile.css";
import Header from "../Header/Header";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
const userName = "Виталий";
const userEmail = "pochta@yandex.ru";

function Profile({ isOpen }) {
  return (
    <section className={`profile ${isOpen && "profile_opened"} page__section`}>
      <Header isOpen={true} navTypeSmall={true} />
      <div className="profile__container profile__container_opened">
        <p className="profile__title">Привет, {userName}!</p>
        <div className="profile__edit-form">
          <div className="profile__info-block">
            <p className="profile__info-subtitle">Имя</p>
            <input
              className="profile__input profile__input_type_inactive profile__info-subtitle"
              id="profile-name"
              type="text"
              placeholder={userName}
            ></input>
          </div>
          <div className="profile__break_line"></div>
          <div className="profile__info-block">
            <p className="profile__info-subtitle">E-mail</p>
            <input
              className="profile__input profile__input_type_inactive profile__info-subtitle"
              id="profile-email"
              type="text"
              placeholder={userEmail}
            ></input>
          </div>
        </div>
        <ButtonContainer type={false} />
      </div>
    </section>
  );
}

export default Profile;
