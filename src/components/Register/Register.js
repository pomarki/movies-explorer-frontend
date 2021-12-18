import { useState } from "react";
import "./Register.css";
import EntranceWindow from "../EntranceWindow/EntranceWindow";
import InfoMessage from "../InfoMessage/InfoMessage";

function Register({ registerUser, isRegisterDone }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <section className="register page__section">
      <EntranceWindow
        windowType="register"
        registerUser={registerUser}
        name={name}
        email={email}
        password={password}
        isRegisterDone={isRegisterDone}
      >
        <label className="entrance-window__label" htmlFor="register-user">
          Имя
        </label>
        <input
          type="text"
          required
          id="register-user"
          value={name}
          onChange={handleChangeName}
          className="entrance-window__text entrance-window__text_input register__input"
        ></input>
        <div className="entrance-window__breakline"></div>
        <label className="entrance-window__label" htmlFor="register-email">
          E-mail
        </label>
        <input
          type="email"
          id="register-email"
          required
          value={email}
          onChange={handleChangeEmail}
          className="entrance-window__text entrance-window__text_input register__input"
        ></input>
        <div className="entrance-window__breakline"></div>
        <label className="entrance-window__label" htmlFor="register-password">
          Пароль
        </label>
        <input
          type="password"
          id="register-password"
          required
          value={password}
          onChange={handleChangePassword}
          className="entrance-window__text entrance-window__text_input register__input"
        ></input>
        <div className="entrance-window__breakline"></div>
      </EntranceWindow>
      <InfoMessage isRegisterDone={isRegisterDone}/>
    </section>
  );
}

export default Register;
