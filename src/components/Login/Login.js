import "./Login.css";
import EntranceWindow from "../EntranceWindow/EntranceWindow";

function Login({ isOpen }) {
  return (
    <section className={`login ${isOpen && "login_opened"} page__section`}>
      <EntranceWindow>
        <p className="login__label">E-mail</p>
        <input
          type="text"
          id="login-email"
          className="login__input"
        ></input>

        <p className="login__label">Пароль</p>
        <input
          type="password"
          id="login-password"
          className="login__input"
        ></input>
      </EntranceWindow>
    </section>
  );
}

export default Login;
