import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormValidation from "../../hooks/useFormValidation";

function Profile({
  handleLogout,
  updateUser,
  isUpdateMessage,
  updateInProgress,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation();

    console.log(values.name, values.email)


  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email });
  }, []);

  const [isUpdateFormOpen, setUpdateFormOpen] = useState(true);
  // const [isValueOk, setIsValueOk] = useState(false);

  function handleUpdateForm() {
    setUpdateFormOpen(!isUpdateFormOpen);
  }

/*   function checkValues() {
    if (
      currentUser.email === values.email &&
      currentUser.name === values.name
    ) {
      setIsValueOk(false);
    } else {
      setIsValueOk(true);
    }
  } */

/*   useEffect(() => {
    checkValues();
}, [handleChange]); */

  function handleUpdateUser(e) {
    e.preventDefault();
    updateUser({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <>
      <Header isOpen={true} navTypeSmall={true} />
      <section className="profile page__section">
        <div className="profile__container profile__container_opened">
          <p className="profile__title">Привет, {currentUser.name}!</p>
          <form className="profile__edit-form">
            <div className="profile__info-block">
              <p className="profile__info-subtitle">Имя</p>
              <input
                className={`profile__input profile__info-subtitle ${
                  isUpdateFormOpen && "profile__input_type_inactive"
                }`}
                name="name"
                id="profile-name"
                type="text"
                value={values.name || ""}
                onChange={handleChange}
                disabled={updateInProgress}
                placeholder="Имя"
                required
                minLength="2"
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
                name="email"
                type="email"
                value={values.email || ""}
                onChange={handleChange}
                disabled={updateInProgress}
                placeholder="email"
                required
              ></input>
            </div>
            <span className="profile__error-message">{errors.email || ""}</span>
          </form>
          <ButtonContainer
            type={!isUpdateFormOpen}
            isValid={isValid}
            handleLogout={handleLogout}
            handleUpdateUser={handleUpdateUser}
            handleUpdateForm={handleUpdateForm}
            message={isUpdateMessage}
            updateInProgress={updateInProgress}
          />
        </div>
      </section>
    </>
  );
}

export default Profile;
