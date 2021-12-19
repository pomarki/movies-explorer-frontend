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

function App() {
  const [isRegisterDone, setRegisterDone] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    setLoggedIn(true);
  }
  function handleLogout() {
    localStorage.removeItem('_id');
    setCurrentUser({});
    setLoggedIn(false);
    navigate("/signin", { replace: true });
  }

  function registerUser(name, password, email) {
    auth
      .register(name, password, email)
      .then((response) => {
        setRegisterDone(resMessages.successfulRegistration);
        console.log(response.headers);
      })
      .catch((err) => {
        if (err.status === 400) {
          setRegisterDone(resMessages.registrationError);
        }
        if (err.status === 409) {
          setRegisterDone(resMessages.conflictEmailError);
        }
        console.log(`ERROR: ${err.status}`);
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
        console.log(err);
      });
  }

  useEffect(() => {
    if (loggedIn) {
      
      const promises = [api.getUserInfo()];
      Promise.all(promises)
        .then((result) => {
          setCurrentUser(result[0]);
          console.log(result)
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
          <Route path="/profile" element={<Profile handleLogout={handleLogout} />} />
          <Route
            path="/signup"
            element={
              <Register
                registerUser={registerUser}
                isRegisterDone={isRegisterDone}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login isOpen={true} authorizationUser={authorizationUser} />
            }
          />
          <Route path="*" element={<PageNotFound isOpen={true} />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
