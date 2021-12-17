import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { initialMovies } from "../../consts/initial-movies";

function Movies({ isOpen }) {
  return (
    <>
      <Header />
      <main className={`movies page__section ${isOpen && "movies_opened"}`}>
        <SearchForm />
        <MoviesCardList
          isOpen={true}
          movies={initialMovies}
          listTypeSaved={false}
        />
      </main>
      <Footer isOpen={true} />
    </>
  );
}

export default Movies;
