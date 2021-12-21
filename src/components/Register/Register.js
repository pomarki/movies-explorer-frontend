import { useState, useEffect } from "react";
import "./Register.css";
import EntranceWindow from "../EntranceWindow/EntranceWindow";
import useFormValidation from "../../hooks/useFormValidation";

function Register({ registerUser, isRegisterMessage }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmitRegister(e) {
    e.preventDefault();
    registerUser(
      values.name,
      values.password,
      values.email,
    );
    resetForm();
  }

  return (
    <section className="register page__section">
      <EntranceWindow
        isRegisterOpen={true}
        onRegister={handleSubmitRegister}
        windowType="register"
        values={values}
        isValid={isValid}
        errors={errors}
        message={isRegisterMessage}
      >
        <div className="entrance-window__input-container">
          <label className="entrance-window__label" htmlFor="register-user">
            Имя
          </label>
          <input
            type="text"
            name="name"
            required
            id="register-user"
            minLength="2"
            value={values.name || ""}
            onChange={handleChange}
            className="entrance-window__text entrance-window__text_input register__input"
          ></input>
          <div className="entrance-window__breakline"></div>
          <span className="entrance-window__error-message">
            {errors.name || ""}
          </span>
        </div>
        <div className="entrance-window__input-container">
          <label className="entrance-window__label" htmlFor="register-email">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="register-email"
            required
            value={values.email || ""}
            onChange={handleChange}
            className="entrance-window__text entrance-window__text_input register__input"
          ></input>
          <div className="entrance-window__breakline"></div>
          <span className="entrance-window__error-message">
            {errors.email || ""}
          </span>
        </div>
        <div className="entrance-window__input-container">
          <label className="entrance-window__label" htmlFor="register-password">
            Пароль
          </label>
          <input
            name="password"
            type="password"
            id="register-password"
            required
            value={values.password || ""}
            onChange={handleChange}
            className="entrance-window__text entrance-window__text_input register__input"
          ></input>
          <div className="entrance-window__breakline"></div>
          <span className="entrance-window__error-message">
            {errors.password || ""}
          </span>
        </div>
      </EntranceWindow>
    </section>
  );
}

export default Register;
