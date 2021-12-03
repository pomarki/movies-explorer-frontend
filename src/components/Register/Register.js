import "./Register.css";
import { Link } from "react-router-dom";

function Register({ isOpen }) {
  return (
    <section
      className={`register ${isOpen && "register_opened"} page__section`}
    >
      <div className="register__container">
        <Link to="/">
          <div className="page__logo page__link"></div>
        </Link>
        <p className="register__title">Добро пожаловать!</p>
        <div className="register__form-container">
          <div className="register__input-block">
            <p className="register__label">Имя</p>
            <input
              type="text"
              id="register-user"
              className="register__input"
            ></input>
          </div>
          <div className="register__input-block">
            <p className="register__label">E-mail</p>
            <input
              type="text"
              id="register-email"
              className="register__input"
            ></input>
          </div>
          <div className="register__input-block">
            <p className="register__label">Пароль</p>
            <input
              type="password"
              id="register-password"
              className="register__input"
            ></input>
            <p className="register__error-message">Что-то пошло не так</p>
          </div>
          <button className="register__reg-button page__link">
            Зарегистрироваться
          </button>
          <div className="register__link-container">
            <p className="register__subtitle">Уже зарегистрированы?</p>
            <Link to="/" className="register__link page__link">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
