import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import { initialMovies } from "../../consts/initial-movies";

function Movies({isOpen}) {
    return (
      <section className={`movies page__section ${isOpen && "movies_opened"}`}>
        <Header isOpen={true} navOpen={true} />
        <SearchForm />
        <Popup isOpen={false} />
        <MoviesCardList isOpen={true} movies={initialMovies} />
        <Footer isOpen={true} />
      </section>
    );
  }
  
  export default Movies;