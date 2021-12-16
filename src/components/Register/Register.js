import "./Register.css";
import EntranceWindow from "../EntranceWindow/EntranceWindow";

function Register({ isOpen }) {
  return (
    <section
      className={`register ${isOpen && "register_opened"} page__section`}
    >
      <EntranceWindow name="register">
        <label className="entrance-window__label" htmlFor="register-user">
          Имя
        </label>
        <input
          type="text"
          id="register-user"
          className="entrance-window__text entrance-window__text_input"
        ></input>
        <div className="entrance-window__breakline"></div>
        <label className="entrance-window__label" htmlFor="register-email">
          E-mail
        </label>
        <input
          type="email"
          id="register-email"
          className="entrance-window__text entrance-window__text_input register__input"
        ></input>
        <div className="entrance-window__breakline"></div>
        <label className="entrance-window__label" htmlFor="register-password">
          Пароль
        </label>
        <input
          type="password"
          id="register-password"
          className="entrance-window__text entrance-window__text_input register__input"
        ></input>
        <div className="entrance-window__breakline"></div>
        <p className="entrance-window__error-message">Что-то пошло не так...</p>
      </EntranceWindow>
    </section>
  );
}

export default Register;
