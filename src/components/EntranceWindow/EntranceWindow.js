import "./EntranceWindow.css";
import { Link } from "react-router-dom";
import InfoMessage from "../InfoMessage/InfoMessage";

function EntranceWindow({
  windowType,
  children,
  registerUser,
  authorizationUser,
  name,
  password,
  email,
  isRegisterDone,
  
}) {
  function handleSubmitRegister(e) {
    e.preventDefault();
    registerUser(name, password, email);
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    authorizationUser(email, password);
  }

  let linkDirection;
  let linkSubtitle;
  let linkName;
  let buttonTitle;
  let greeting;
  let buttonId;
  let loginContainer;
  let buttonAction;

  windowType === "register"
    ? (linkDirection = "/signin")
    : (linkDirection = "/signup");

  windowType === "register"
    ? (linkSubtitle = "Уже зарегистрированы?")
    : (linkSubtitle = "Ещё не зарегистрированы?");
  windowType === "register" ? (linkName = "Войти") : (linkName = "Регистрация");

  windowType === "register"
    ? (buttonTitle = "Зарегистрироваться")
    : (buttonTitle = "Войти");

  windowType === "register"
    ? (greeting = "Добро пожаловать!")
    : (greeting = "Рады видеть!");

  windowType === "register"
    ? (buttonId = "register-button")
    : (buttonId = "login-button");

  windowType === "register"
    ? (loginContainer = false)
    : (loginContainer = true);

  windowType === "register"
    ? (buttonAction = handleSubmitRegister)
    : (buttonAction = handleSubmitLogin);

  return (
    <>
      <Link to="/">
        <div className="page__logo page__link"></div>
      </Link>
      <p className="entrance-window__title">{greeting}</p>
      <div
        className={`entrance-window__form-container ${
          loginContainer && "entrance-window__form-container_login"
        }`}
      >
        {children}
      </div>
      <div
        className={`entrance-window__button-container ${
          loginContainer && "entrance-window__button-container_login"
        }`}
      >
        <InfoMessage isRegisterDone={isRegisterDone} />
        <button
          className="entrance-window__reg-button page__link"
          id={buttonId}
          onClick={buttonAction}
        >
          {buttonTitle}
        </button>
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
    </>
  );
}

export default EntranceWindow;
