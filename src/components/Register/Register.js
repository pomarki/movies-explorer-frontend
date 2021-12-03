import "./Register.css";
import EntranceWindow from "../EntranceWindow/EntranceWindow";

function Register({ isOpen }) {
  let userName = "Денис";
  let userEmail = "denis.shalaew@yandex.ru";

  return (
    <section
      className={`register ${isOpen && "register_opened"} page__section`}
    >
      <EntranceWindow name="register">
        <p className="register__label">Имя</p>
        <input
          type="text"
          id="register-user"
          className="register__input"
          value={userName}
        ></input>

        <p className="register__label">E-mail</p>
        <input
          type="text"
          id="register-email"
          className="register__input"
          value={userEmail}
        ></input>

        <p className="register__label">Пароль</p>
        <input
          type="password"
          id="register-password"
          className="register__input"
        ></input>
        <p className="register__error-message">Что-то пошло не так</p>
      </EntranceWindow>
    </section>
  );
}

export default Register;
