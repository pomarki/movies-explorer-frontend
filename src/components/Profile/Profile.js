import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ handleLogout }) {
  const currentUser = React.useContext(CurrentUserContext);
  

  return (
    <section className="profile page__section">
      <Header isOpen={true} navTypeSmall={true} />
      <div className="profile__container profile__container_opened">
        <p className="profile__title">Привет, {currentUser.name}!</p>
        <div className="profile__edit-form">
          <div className="profile__info-block">
            <p className="profile__info-subtitle">Имя</p>
            <input
              className="profile__input profile__info-subtitle"
              id="profile-name"
              type="text"
              placeholder={currentUser.name}
            ></input>
          </div>
          <div className="profile__break_line"></div>
          <div className="profile__info-block">
            <p className="profile__info-subtitle">E-mail</p>
            <input
              className="profile__input profile__input_type_inactive profile__info-subtitle"
              id="profile-email"
              type="text"
              placeholder={currentUser.email}
            ></input>
          </div>
        </div>
        <ButtonContainer type={false} handleLogout={handleLogout} />
      </div>
    </section>
  );
}

export default Profile;
