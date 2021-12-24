import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";


function Movies({ isOpen, filtredMovies, onSubmit }) {
  return (
    <>
      <Header />
      <main className={`movies page__section ${isOpen && "movies_opened"}`}>
        <SearchForm onSubmit={onSubmit} />
        <MoviesCardList
          isOpen={true}
          movies={filtredMovies}
          listTypeSaved={false}
        />
      </main>
      <Footer isOpen={true} />
    </>
  );
}

export default Movies;
