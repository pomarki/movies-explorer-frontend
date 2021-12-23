import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../../hoc/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import resMessages from "../../utils/response-messages";
import * as auth from "../../utils/auth";
import api from "../../utils/MainApi";
import getInitialMovies from "../../utils/getInitialMovies";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isRegisterMessage, setRegisterMessage] = useState("");
  const [isLoginMessage, setLoginMessage] = useState("");
  const [isUpdateMessage, setUpdateMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [requestInProgress, setRequestInProgress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* const [initialMovies, setInitialMovies] = useState([]); */

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (loggedIn) {
      getInitialMovies();
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo()])
        .then(([userDate]) => {
          setCurrentUser(userDate);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getUser(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            navigate(location);
          }
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          navigate("/", { replace: true });
        });
    }
  }

  function handleLogin() {
    setLoggedIn(true);
    setLoginMessage("");
  }
  function handleLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("beatMovies");
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
    setRequestInProgress(true);
    auth
      .register(name, password, email)
      .then((response) => {
        setRegisterMessage(resMessages.successfulRegister);
        setRequestInProgress(false);
        setTimeout(() => navigate("/signin", { replace: true }), 5000);
      })
      .catch((err) => {
        setRequestInProgress(false);
        if (err.status === 400) {
          return messageTimer(
            resMessages.registrationError,
            setRegisterMessage
          );
        }
        if (err.status === 409) {
          return messageTimer(
            resMessages.conflictEmailError,
            setRegisterMessage
          );
        }
        return messageTimer(resMessages.serverError, setRegisterMessage);
      });
  }

  function authorizationUser(password, email) {
    setLoginMessage(resMessages.waitingForUpdate);
    setRequestInProgress(true);
    auth
      .authorize(password, email)
      .then((token) => {
        setRequestInProgress(false);
        if (token) {
          handleLogin();
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        setRequestInProgress(false);
        if (err.status === 401) {
          return messageTimer(resMessages.unauthorizedError, setLoginMessage);
        }
        return messageTimer(resMessages.serverError, setLoginMessage);
      });
  }

  function updateUser(data) {
    setUpdateMessage(resMessages.waitingForUpdate);
    setRequestInProgress(true);
    api
      .changeUserInfo(data)
      .then((newData) => {
        setRequestInProgress(false);
        setCurrentUser(newData);
        messageTimer(resMessages.successfulUpdate, setUpdateMessage);
      })
      .catch((err) => {
        setRequestInProgress(false);
        if (err.status === 400) {
          return messageTimer(resMessages.registrationError, setUpdateMessage);
        }
        if (err.status === 409) {
          return messageTimer(resMessages.conflictEmailError, setUpdateMessage);
        }
        return messageTimer(resMessages.serverError, setUpdateMessage);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={<Main isOpen={true} loggedIn={loggedIn} />}
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies isOpen={true} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies isOpen={true} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  handleLogout={handleLogout}
                  updateUser={updateUser}
                  isUpdateMessage={isUpdateMessage}
                  updateInProgress={requestInProgress}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                registerUser={registerUser}
                isRegisterMessage={isRegisterMessage}
                registerInProgress={requestInProgress}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                authorizationUser={authorizationUser}
                isLoginMessage={isLoginMessage}
                loginInProgress={requestInProgress}
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
