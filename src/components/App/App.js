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
import * as auth from "../../utils/auth";

function App() {
  

  function registerUser(name, password, email) {
    auth
      .register(name, password, email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
