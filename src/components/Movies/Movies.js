import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
    return (
      <div className="movies">
        <Header isOpen={true} navTypeSmall={true} />
        <SearchForm />
        <MoviesCardList />
        <Footer isOpen={true} />
      </div>
    );
  }
  
  export default Movies;