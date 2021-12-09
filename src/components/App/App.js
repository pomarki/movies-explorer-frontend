import "./App.css";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Popup from "../Popup/Popup";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  return (
    <div className="page">
      <Popup isOpen={false} />
      <Main isOpen={false} />
      <Footer isOpen={false} />
      <Movies isOpen={false} />
      <SavedMovies isOpen={false} />
      <Profile isOpen={true} />
      <Register isOpen={false} />
      <Login isOpen={false} />
      <PageNotFound isOpen={false} />
    </div>
  );
}

export default App;
