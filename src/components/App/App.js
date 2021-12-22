import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
/* import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"; */
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import resMessages from "../../utils/response-messages";
import * as auth from "../../utils/auth";
import api from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isRegisterMessage, setRegisterMessage] = useState("");
  const [isLoginMessage, setLoginMessage] = useState("");
  const [isUpdateMessage, setUpdateMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    setLoggedIn(true);
    setLoginMessage("");
  }
  function handleLogout() {
    localStorage.removeItem("_id");
    setCurrentUser({});
    setLoggedIn(false);
    navigate("/signin", { replace: true });
  }
  function messageTimer(message, messageSetter) {
    messageSetter(message);
    setTimeout(() => messageSetter(""), 5000);
  }

  function registerUser(name, password, email) {
    setRegisterMessage(resMessages.waitingForUpdate);
    auth
      .register(name, password, email)
      .then((response) => {
        setRegisterMessage(resMessages.successfulRegister);
        setTimeout(() => navigate("/signin", { replace: true }), 5000);
      })
      .catch((err) => {
        if (err.status === 400) {
          return messageTimer(resMessages.registrationError, setRegisterMessage);
        }
        if (err.status === 409) {
          return messageTimer(resMessages.conflictEmailError, setRegisterMessage);
        }
        return messageTimer(resMessages.serverError, setRegisterMessage);
      });
  }

  function authorizationUser(password, email) {
    setLoginMessage(resMessages.waitingForUpdate);
    auth
      .authorize(password, email)
      .then((token) => {
        if (token) {
          handleLogin();
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          return messageTimer(resMessages.unauthorizedError, setLoginMessage);
        }
        return messageTimer(resMessages.serverError, setLoginMessage);
      });
  }

  function updateUser(data) {
    setUpdateMessage(resMessages.waitingForUpdate);
    api
      .changeUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        messageTimer(resMessages.successfulUpdate, setUpdateMessage);
      })
      .catch((err) => {
        if (err.status === 400) {
          return messageTimer(resMessages.registrationError, setUpdateMessage);
        }
        if (err.status === 409) {
          return messageTimer(resMessages.conflictEmailError, setUpdateMessage);
        }
        return messageTimer(resMessages.serverError, setUpdateMessage);
      });
  }

  useEffect(() => {
    if (loggedIn) {
      const promises = [api.getUserInfo()];
      Promise.all(promises)
        .then((result) => {
          setCurrentUser(result[0]);

          /*          setCards(
            result[1].cards.map((card) => ({
              name: card.name,
              link: card.link,
              likes: card.likes,
              cardId: card._id,
              userId: card.owner,
            }))
          ); */
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route exact path="/" element={<Main isOpen={true} />} />
          <Route path="/movies" element={<Movies isOpen={true} />} />
          <Route path="/saved-movies" element={<SavedMovies isOpen={true} />} />
          <Route
            path="/profile"
            element={
              <Profile
                handleLogout={handleLogout}
                updateUser={updateUser}
                isUpdateMessage={isUpdateMessage}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                registerUser={registerUser}
                isRegisterMessage={isRegisterMessage}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                authorizationUser={authorizationUser}
                isLoginMessage={isLoginMessage}
              />
            }
          />
          <Route path="*" element={<PageNotFound isOpen={true} />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
