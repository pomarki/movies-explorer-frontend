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
import movies from "../../utils/MoviesApi";
import { messageTimer } from "../../utils/utils";

function App() {
  const [isRegisterMessage, setRegisterMessage] = useState("");
  const [isLoginMessage, setLoginMessage] = useState("");
  const [isUpdateMessage, setUpdateMessage] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [requestInProgress, setRequestInProgress] = useState(false);
  const [searchInProgress, setSearchInProgress] = useState(false);

  const [shortToggle, setShortToggle] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchResultSaved, setSearchResultSaved] = useState([]);
  const [searchResultSavedShort, setSearchResultSavedShort] = useState([]); // добавил
  const [firstSubmit, setFirstSubmit] = useState(true);

  const [searchMessage, setSearchMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    } else {
      Promise.all([api.getUserInfo(), getInitialMovies()])
        .then(([userDate, moviesDate]) => {
          setCurrentUser(userDate);
          getSavedMovies();
          setInitialMovies(moviesDate);
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
    localStorage.removeItem("allMovies");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("searchResult");
    localStorage.removeItem("searchResultShort");
    localStorage.removeItem("searchResultSaved");
    localStorage.removeItem("searchResultShortSaved");
    setCurrentUser({});
    setLoggedIn(false);
    setSavedMovies([]);
    setSearchResult([]);
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

  function getInitialMovies() {
    const baseURL = "https://api.nomoreparties.co";
    const notFoundImage =
      "https://ic.pics.livejournal.com/pomarki/910249/22199/22199_900.png";
    const noDate = "нет данных";
    const noTrailer = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    movies()
      .then((data) => {
        const moviesArray = data.map((item) => {
          const thumbnail = item.image.formats?.small?.url
            ? baseURL + item.image.formats?.small?.url
            : notFoundImage;
          const image = item.image.formats?.thumbnail?.url
            ? baseURL + item.image.formats?.thumbnail?.url
            : notFoundImage;
          const country = item.country ? item.country : noDate;
          const director = item.director ? item.director : noDate;
          const duration = item.duration ? item.duration : 0;
          const year = item.year ? item.year : 0;
          const description = item.description ? item.description : noDate;
          const trailerLink = item.trailerLink ? item.trailerLink : noTrailer;
          const nameRU = item.nameRU ? item.nameRU : item.nameEN;
          const nameEN = item.nameEN ? item.nameEN : noDate;
          return {
            country: country,
            director: director,
            duration: duration,
            year: year,
            description: description,
            image: image,
            trailer: trailerLink,
            thumbnail: thumbnail,
            movieId: item.id,
            nameRU: nameRU,
            nameEN: nameEN,
          };
        });
        localStorage.setItem("allMovies", JSON.stringify(moviesArray));
        setInitialMovies(moviesArray);
      })
      .catch((err) => console.log(err));
  }

  function searchMovies(moviesArrow, keyword) {
    setSearchMessage("");
    const unifiedWord = (word) => word.toLowerCase();
    const path = location.pathname;

    keyword = unifiedWord(keyword);

    let result = moviesArrow.filter((movie) => {
      return (
        unifiedWord(movie.nameRU).includes(keyword) ||
        unifiedWord(movie.nameEN).includes(keyword) ||
        unifiedWord(movie.description).includes(keyword)
      );
    });

    if (result.length === 0 && path === "/movies") {
      setSearchMessage("Фильмов по вашему запросу не найдено.");
    }

    if (result.length === 0 && path === "/saved-movies") {
      setSearchMessage("Сохранённых фильмов по вашему запросу не найдено.");
      //setSearchResultSaved([]); // добавил
      //setSearchResultSavedShort([]); //добавил
    }

    const shortMoviesArr = result.filter((movie) => movie.duration <= 40);

    if (shortToggle && shortMoviesArr.length === 0 && path === "/movies") {
      setSearchMessage(
        "Короткометражных фильмов по вашему запросу не найдено."
      );
    }

    if (
      shortToggle &&
      shortMoviesArr.length === 0 &&
      path === "/saved-movies"
    ) {
      setSearchMessage(
        "Сохранённых короткометражных фильмов по вашему запросу не найдено."
      );
      //setSearchResultSaved([]); // добавил
      //setSearchResultSavedShort([]); // добавил
    }

    if (path === "/movies") {
      localStorage.setItem("searchResult", JSON.stringify(result));
      localStorage.setItem("searchResultShort", JSON.stringify(shortMoviesArr));
    }

    if (path === "/saved-movies") {
      localStorage.setItem("searchResultSaved", JSON.stringify(result)); // <- это все фильмы
      //localStorage.setItem(
      //  "searchResultShortSaved", // <- это короткометражки
      //  JSON.stringify(shortMoviesArr)
      //);
      //setSearchResultSaved(result); // добавил
      //setSearchResultSavedShort(shortMoviesArr);  // добавил
    }
  }

  function submitSearchMovies(keyword) {
    setSearchInProgress(true);
    setSearchResult([]);
    setTimeout(() => setSearchInProgress(false), 1000);
    searchMovies(initialMovies, keyword);

    const searchArrFull = JSON.parse(localStorage.getItem("searchResult"));
    const searchArrShort = JSON.parse(
      localStorage.getItem("searchResultShort")
    ); // добавил

    if (shortToggle) {
      //setSearchResult(searchArrow.filter((movie) => movie.duration <= 40));
      setSearchResult(searchArrShort); // добавил
    } else {
      setSearchResult(searchArrFull);
    }
  }

  function submitSearchSavedMovies(keyword) {
    setFirstSubmit(false);
    setSearchInProgress(true);
    setTimeout(() => setSearchInProgress(false), 1000);
    searchMovies(savedMovies, keyword);

    const searchArrow = JSON.parse(localStorage.getItem("searchResultSaved"));
    //const searchArrow = searchResultSaved;

    if (shortToggle) {
      setSearchResultSaved(searchArrow.filter((movie) => movie.duration <= 40));
    } else {
      setSearchResultSaved(searchArrow);
    }
  }

  function likeMovie(movie) {
    api
      .chooseNewMovie(movie)
      .then((newMovie) => {
        const moviesArray = [...savedMovies, newMovie.movie];
        setSavedMovies(moviesArray);
        localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
      })
      .catch((err) => console.log(err));
  }

  function getSavedMovies() {
    api
      .getUserMovies()
      .then((res) => {
        const moviesArray = [...res.moviesDate];
        setSavedMovies(moviesArray);
        localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
      })
      .catch((err) => console.log(err));
  }

  function removeUserMovie(id) {
    api
      .removeMovie(id)
      .then((res) => {
        let moviesArray = JSON.parse(localStorage.getItem("savedMovies"));
        moviesArray = moviesArray.filter((item) => item._id !== id);
        setSavedMovies(moviesArray);
        localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
      })
      .catch((err) => console.log(err));
  }

  function handleToggleMovies() {
    setSearchMessage("");

    let moviesArr = JSON.parse(localStorage.getItem("searchResult"));

    if (moviesArr === null) {
      moviesArr = [];
    }

    let shortMoviesArr = JSON.parse(localStorage.getItem("searchResultShort"));

    if (moviesArr.length !== 0) {
      if (shortMoviesArr.length === 0 && !shortToggle) {
        setSearchMessage(
          "Короткометражных фильмов по вашему запросу не найдено."
        );
      }

      if (!shortToggle) {
        setSearchResult(shortMoviesArr);
        setShortToggle(!shortToggle);
      } else {
        setSearchResult(moviesArr);
        setShortToggle(!shortToggle);
      }
    } else {
      setShortToggle(!shortToggle);
    }
  }

  function handleToggleSavedMovies() {
    // надо знать ищу я среди всех фильмов, или среди найденных
    setSearchMessage("");

    // let moviesArr = JSON.parse(localStorage.getItem("searchResultSaved"));
    let moviesArr;
    let shortMoviesArr;

    if (firstSubmit) {
      moviesArr = savedMovies;
      shortMoviesArr = savedMovies.filter((movie) => movie.duration <= 40);
    } else {
      moviesArr = JSON.parse(localStorage.getItem("searchResultSaved"));
      shortMoviesArr = moviesArr.filter((movie) => movie.duration <= 40);
    }

    if (moviesArr === null) {
      moviesArr = [];
    }

    //shortMoviesArr = JSON.parse(
    //  localStorage.getItem("searchResultShortSaved")
    //);

    if (moviesArr.length !== 0) {
      if (shortMoviesArr.length === 0 && !shortToggle) {
        setSearchMessage(
          "Сохранённых короткометражных фильмов по вашему запросу не найдено."
        );
      }

      if (!shortToggle) {
        setSearchResultSaved(shortMoviesArr);
        setShortToggle(!shortToggle);
      } else {
        setSearchResultSaved(moviesArr);
        setShortToggle(!shortToggle);
      }
    } else {
      setShortToggle(!shortToggle);
    }
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
                  message={searchMessage}
                  isDurationFilter={handleToggleMovies}
                  filtredMovies={searchResult}
                  savedMovies={savedMovies}
                  onSubmit={submitSearchMovies}
                  onLike={likeMovie}
                  onDelete={removeUserMovie}
                  buttonState={shortToggle}
                  isLoading={searchInProgress}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  message={searchMessage}
                  isDurationFilter={handleToggleSavedMovies}
                  filtredMovies={searchResultSaved}
                  savedMovies={savedMovies}
                  isOpen={true}
                  onSubmit={submitSearchSavedMovies}
                  onDelete={removeUserMovie}
                  buttonState={shortToggle}
                  isLoading={searchInProgress}
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
