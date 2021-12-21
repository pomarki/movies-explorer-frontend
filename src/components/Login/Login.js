import "./Login.css";
import { useEffect, useState } from "react";
import EntranceWindow from "../EntranceWindow/EntranceWindow";
import useFormValidation from "../../hooks/useFormValidation";

function Login({ authorizationUser, isLoginMessage }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmitLogin(e) {
    e.preventDefault();
    authorizationUser(values.email, values.password);
  }

  return (
    <section className="login page__section">
      <EntranceWindow
        isLoginOpen={true}
        windowType="login"
        message={isLoginMessage}
        authorizationUser={authorizationUser}
        values={values}
        errors={errors}
        isValid={isValid}
        onLogin={handleSubmitLogin}
      >
        <div className="entrance-window__input-container">
          <label className="entrance-window__label">E-mail</label>
          <input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            required
            className="entrance-window__text entrance-window__text_input"
          ></input>
          <div className="entrance-window__breakline"></div>
          <span className="entrance-window__error-message">
            {errors.email || ""}
          </span>
        </div>
        <div className="entrance-window__input-container">
          <label className="entrance-window__label">Пароль</label>
          <input
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            required
            className={`entrance-window__text entrance-window__text_input ${
              isLoginMessage && "entrance-window__text_error"
            }`}
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

export default Login;
