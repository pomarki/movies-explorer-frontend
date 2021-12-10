import "./App.css";
import { Routes, Route } from "react-router";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<Main isOpen={true} />} />
        <Route path="/movies" element={<Movies isOpen={true} />} />
        <Route path="/saved-movies" element={<SavedMovies isOpen={true} />} />
        <Route path="/profile" element={<Profile isOpen={true} />} />
        <Route path="/signup" element={<Register isOpen={true} />} />
        <Route path="/signin" element={<Login isOpen={true} />} />
        <Route path="*" element={<PageNotFound isOpen={true} />} />
      </Routes>
    </div>
  );
}

export default App;
