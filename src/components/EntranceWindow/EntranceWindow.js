import "./EntranceWindow.css";
import { Link } from "react-router-dom";

function EntranceWindow({ name, children }) {
  let linkDirection;
  let linkSubtitle;
  let linkName;
  let buttonTitle;
  let greeting;

  name === "register"
    ? (linkDirection = "/sign-in")
    : (linkDirection = "/sign-up");
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

  return (
    <div className="entrance-window__container">
      <Link to="/">
        <div className="page__logo page__link"></div>
      </Link>
      <p className="entrance-window__title">{greeting}</p>
      <div className="entrance-window__form-container">{children}</div>
      <button className="entrance-window__reg-button page__link">
        {buttonTitle}
      </button>
      <div className="entrance-window__link-container">
        <p className="entrance-window__subtitle">{linkSubtitle}</p>
        <Link to={linkDirection} className="entrance-window__link page__link">
          {linkName}
        </Link>
      </div>
    </div>
  );
}

export default EntranceWindow;
