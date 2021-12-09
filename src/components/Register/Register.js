import "./Register.css";
import EntranceWindow from "../EntranceWindow/EntranceWindow";

function Register({ isOpen }) {
  let userName = "Виталий";
  let userEmail = "pochta@yandex.ru";

  return (
    <section
      className={`register ${isOpen && "register_opened"} page__section`}
    >
      <EntranceWindow name="register">
        <label className="register__label" for="register-user">
          Имя
        </label>
        <input
          type="text"
          id="register-user"
          className="register__input"
        ></input>
        <div className="register__breakline"></div>
        <label className="register__label" for="register-email">
          E-mail
        </label>
        <input
          type="email"
          id="register-email"
          className="register__input"
        ></input>
        <div className="register__breakline"></div>
        <label className="register__label" for="register-password">
          Пароль
        </label>
        <input
          type="password"
          id="register-password"
          className="register__input"
        ></input>
        <div className="register__breakline"></div>
        <p className="register__error-message redister__error-message_inactive">Что-то пошло не так</p>
      </EntranceWindow>
    </section>
  );
}

export default Register;
