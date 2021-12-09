import "./Login.css";
import EntranceWindow from "../EntranceWindow/EntranceWindow";

function Login({ isOpen }) {
  return (
    <section className={`login ${isOpen && "login_opened"} page__section`}>
      <EntranceWindow name="login">
        <label className="entrance-window__label">E-mail</label>
        <input
          type="text"
          id="login-email"
          className="entrance-window__input"
        ></input>
        <div className="entrance-window__breakline"></div>
        <label className="entrance-window__label">Пароль</label>
        <input
          type="password"
          id="login-password"
          className="entrance-window__input"
        ></input>
        <div className="entrance-window__breakline"></div>
        <p className="entrance-window__error-message">Что-то пошло не так...</p>
      </EntranceWindow>
    </section>
  );
}

export default Login;
