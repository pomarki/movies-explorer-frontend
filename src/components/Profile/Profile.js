import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormValidation from "../../hooks/useFormValidation";

function Profile({ handleLogout, handleUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const [isUpdateFormOpen, setUpdateFormOpen] = useState(true);

  useEffect(() => {
    setName(currentUser.name || "");
    setEmail(currentUser.email || "");
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleUpdateForm() {
    setUpdateFormOpen(!isUpdateFormOpen);
  }

  return (
    <>
      <Header isOpen={true} navTypeSmall={true} />
      <section className="profile page__section">
        <div className="profile__container profile__container_opened">
          <p className="profile__title">Привет, {currentUser.name}!</p>
          <div className="profile__edit-form">
            <div className="profile__info-block">
              <p className="profile__info-subtitle">Имя</p>
              <input
                className={`profile__input profile__info-subtitle ${
                  isUpdateFormOpen && "profile__input_type_inactive"
                }`}
                id="profile-name"
                type="text"
                value={name}
                onChange={handleChangeName}
                placeholder="Имя"
              ></input>
            </div>
            <div className="profile__break_line"></div>
            <div className="profile__info-block">
              <p className="profile__info-subtitle">E-mail</p>
              <input
                className={`profile__input profile__info-subtitle ${
                  isUpdateFormOpen && "profile__input_type_inactive"
                }`}
                id="profile-email"
                type="text"
                value={email}
                onChange={handleChangeEmail}
                placeholder="email"
              ></input>
            </div>
          </div>
          <ButtonContainer
            type={!isUpdateFormOpen}
            handleLogout={handleLogout}
            handleUpdateUser={handleUpdateUser}
            handleUpdateForm={handleUpdateForm}
            email={email}
            name={name}
          />
        </div>
      </section>
    </>
  );
}

export default Profile;
