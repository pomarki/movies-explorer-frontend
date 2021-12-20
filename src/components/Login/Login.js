import "./Login.css";
import { useEffect, useState } from "react";
import EntranceWindow from "../EntranceWindow/EntranceWindow";
import useFormValidation from "../../hooks/useFormValidation";

function Login({ authorizationUser }) {

  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="login page__section">
      <EntranceWindow
        windowType="login"
        authorizationUser={authorizationUser}
        values={values}
        errors={errors}
        isValid={isValid}
        handleSubmit={handleSubmit}
      >
        <form className="entrance-window__container">
          <label className="entrance-window__label">E-mail</label>
          <input
            type="email"
            name="email"
            id="login-email"
            value={values.email || ""}
            onChange={handleChange}
            required
            className="entrance-window__text entrance-window__text_input"
          ></input>
          <div className="entrance-window__breakline"></div>
          <span className="entrance-window__error-message">{errors.email || ""}</span>
          <label className="entrance-window__label">Пароль</label>
          <input
            type="password"
            name="password"
            id="login-password"
            value={values.password || ""}
            onChange={handleChange}
            required
            className="entrance-window__text entrance-window__text_input"
          ></input>
          <div className="entrance-window__breakline"></div>
          <span className="entrance-window__error-message">{errors.password || ""}</span>
        </form>
      </EntranceWindow>
    </section>
  );
}

export default Login;
