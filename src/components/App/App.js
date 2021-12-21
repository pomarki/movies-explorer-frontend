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
  const [isRegisterMessage, setRegisterDone] = useState("");
  const [isLoginMessage, setLoginMessage] = useState("");
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

  function registerUser(name, password, email) {
    auth
      .register(name, password, email)
      .then((response) => {
        setRegisterDone("");
      })
      .catch((err) => {
        if (err.status === 400) {
          return setRegisterDone(resMessages.registrationError);
        }
        if (err.status === 409) {
          return setRegisterDone(resMessages.conflictEmailError);
        }
        return setRegisterDone(resMessages.serverError);
      });
  }

  function authorizationUser(password, email) {
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
          return setLoginMessage(resMessages.unauthorizedError);
        }
        return setRegisterDone(resMessages.serverError);
      });
  }

  function handleUpdateUser(data) {
    api
      .changeUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
      })
      .catch((err) => {
        /* console.log(err); */
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
                handleUpdateUser={handleUpdateUser}
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
