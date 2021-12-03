import "./App.css";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Popup from "../Popup/Popup";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

function App() {
  return (
    <div className="page">
      <Popup isOpen={false} />
      <Main isOpen={false} />
      <Footer isOpen={false} />
      <Movies isOpen={false} />
      <SavedMovies isOpen={false} />
      <Profile isOpen={false} />
      <Register isOpen={true} />
    </div>
  );
}

export default App;
