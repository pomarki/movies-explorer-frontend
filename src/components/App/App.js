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
import { getInitialMovies } from "../../utils/utils";
import Preloader from "../Preloader/Preloader";
import movies from "../../utils/MoviesApi";
import { messageTimer } from "../../utils/utils";

function App() {
  // переменные user

  const [isRegisterMessage, setRegisterMessage] = useState("");
  const [isLoginMessage, setLoginMessage] = useState("");
  const [isUpdateMessage, setUpdateMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [requestInProgress, setRequestInProgress] = useState(false);
  /* const [isLoading, setIsLoading] = useState(false); */

  // переменные Movies

  const [shortMoviesButton, setShortMoviesButton] = useState(false); // кнопка дополнительной фильтрации короткометражек
  const [initialMovies, setInitialMovies] = useState([]);
  const [initialFiltredMovies, setInitialFiltredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    } else {
      Promise.all([api.getUserInfo(), movies()])
        .then(([userDate, moviesDate]) => {
          setCurrentUser(userDate);
          getSavedMovies();
          setInitialMovies(getInitialMovies(moviesDate));
        })

        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);

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
          /* localStorage.removeItem("jwt"); */
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
    setCurrentUser({});
    setLoggedIn(false);
    setSavedMovies([]);
    navigate("/", { replace: true });
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

  function searchMovies(moviesArrow, keyword) {
    
    const unifiedWord = (word) => word.toLowerCase();
    keyword = unifiedWord(keyword);
    let result = moviesArrow.filter((movie) => {
      return (
        unifiedWord(movie.nameRU).includes(keyword) ||
        unifiedWord(movie.nameEN).includes(keyword) ||
        unifiedWord(movie.description).includes(keyword)
      );
    });
    if (shortMoviesButton) {
    result = result.filter((movie) => movie.duration <= 40);}

    return result;
  }

  function filterMoviesBuDuretion(moviesArrow, value) {
    let result = moviesArrow.filter((movie) => movie.duration <= value);
    return result;
  }

  function submitFilterMoviesBuDuration() {
    const searchArrow = filterMoviesBuDuretion(initialFiltredMovies, 40);
    setInitialFiltredMovies(searchArrow);
  }

  function submitSearchMovies(keyword) {
    const searchArrow = searchMovies(initialMovies, keyword);
    setInitialFiltredMovies(searchArrow);
  }

  function likeMovie(movie) {
    api
      .chooseNewMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie.movie]);
      })
      .catch((err) => console.log(err));
  }

  function getSavedMovies() {
    api
      .getUserMovies()
      .then((res) => {
        setSavedMovies([...res.moviesDate]);
      })
      .catch((err) => console.log(err));
  }

  function removeUserMovie(id) {
    api
      .removeMovie(id)
      .then((res) => {
        setSavedMovies((state) => state.filter((item) => item._id !== id));
      })
      .catch((err) => console.log(err));
  }

  function handleTurnDurationButton() {
    setShortMoviesButton(!shortMoviesButton);
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
                <Movies
                  isOpen={true}
                  isDurationFilter={handleTurnDurationButton}
                  filtredMovies={initialFiltredMovies}
                  savedMovies={savedMovies}
                  onSubmit={submitSearchMovies}
                  onFilter={submitFilterMoviesBuDuration}
                  onLike={likeMovie}
                  onDelete={removeUserMovie}
                  buttonState={shortMoviesButton}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  isOpen={true}
                  savedMovies={savedMovies}
                  onDelete={removeUserMovie}
                />
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
