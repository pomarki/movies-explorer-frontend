import "./Login.css";
import { useState } from "react";
import EntranceWindow from "../EntranceWindow/EntranceWindow";

function Login({ authorizationUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <section className="login page__section">
      <EntranceWindow
        windowType="login"
        authorizationUser={authorizationUser}
        email={email}
        password={password}
      >
        <label className="entrance-window__label">E-mail</label>
        <input
          type="email"
          id="login-email"
          value={email}
          onChange={handleChangeEmail}
          required
          className="entrance-window__text entrance-window__text_input"
        ></input>
        <div className="entrance-window__breakline"></div>
        <label className="entrance-window__label">Пароль</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={handleChangePassword}
          required
          className="entrance-window__text entrance-window__text_input"
        ></input>
        <div className="entrance-window__breakline"></div>
        <p className="entrance-window__error-message">Что-то пошло не так...</p>
      </EntranceWindow>
    </section>
  );
}

export default Login;
