import "./App.css";
import { Routes, Route } from "react-router";
import { useState } from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import resMessages from "../../utils/response-messages";
import * as auth from "../../utils/auth";

function App() {
  const [isRegisterDone, setRegisterDone] = useState("");

  function registerUser(name, password, email) {
    auth
      .register(name, password, email)
      .then((res) => {
        setRegisterDone(resMessages.successfulRegistration);
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
  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<Main isOpen={true} />} />
        <Route path="/movies" element={<Movies isOpen={true} />} />
        <Route path="/saved-movies" element={<SavedMovies isOpen={true} />} />
        <Route path="/profile" element={<Profile isOpen={true} />} />
        <Route
          path="/signup"
          element={
            <Register
              registerUser={registerUser}
              isRegisterDone={isRegisterDone}
            />
          }
        />
        <Route path="/signin" element={<Login isOpen={true} />} />
        <Route path="*" element={<PageNotFound isOpen={true} />} />
      </Routes>
    </div>
  );
}

export default App;
