import "./EntranceWindow.css";
import { Link } from "react-router-dom";

function EntranceWindow({ name, children }) {
  let linkDirection;
  let linkSubtitle;
  let linkName;
  let buttonTitle;
  let greeting;
  let buttonId;
  let loginContainer;

  name === "register"
    ? (linkDirection = "/signin")
    : (linkDirection = "/signup");

  name === "register"
    ? (linkSubtitle = "Уже зарегистрированы?")
    : (linkSubtitle = "Ещё не зарегистрированы?");
  name === "register" ? (linkName = "Войти") : (linkName = "Регистрация");

  name === "register"
    ? (buttonTitle = "Зарегистрироваться")
    : (buttonTitle = "Войти");

  name === "register"
    ? (greeting = "Добро пожаловать!")
    : (greeting = "Рады видеть!");

  name === "register"
    ? (buttonId = "register-button")
    : (buttonId = "login-button");

  name === "register"
    ? (loginContainer = false)
    : (loginContainer = true);

  return (
    <div className="entrance-window__container">
      <Link to="/">
        <div className="page__logo page__link"></div>
      </Link>
      <p className="entrance-window__title">{greeting}</p>
      <div className={`entrance-window__form-container ${loginContainer && "entrance-window__form-container_login"}`}>{children}</div>
      <div className={`entrance-window__button-container ${loginContainer && "entrance-window__button-container_login"}`}>
        <Link to="/movies">
          <button
            className="entrance-window__reg-button page__link"
            id={buttonId}
          >
            {buttonTitle}
          </button>
        </Link>
      </div>
      <div className="entrance-window__link-container">
        <p className="entrance-window__text entrance-window__text_subtitle">
          {linkSubtitle}
        </p>
        <Link
          to={linkDirection}
          className="entrance-window__text entrance-window__text_link page__link"
        >
          {linkName}
        </Link>
      </div>
    </div>
  );
}

export default EntranceWindow;
