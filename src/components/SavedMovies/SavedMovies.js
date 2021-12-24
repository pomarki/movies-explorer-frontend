import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({ isOpen, savedMovies }) {
  return (
    <>
      <Header />
      <main
        className={`saved-movies ${
          isOpen && "saved-movies_opened"
        } page__section`}
      >
        <SearchForm />
        <MoviesCardList
          isOpen={true}
          movies={savedMovies}
          listTypeSaved={true}
        />
      </main>
      <Footer isOpen={true} />
    </>
  );
}

export default SavedMovies;
