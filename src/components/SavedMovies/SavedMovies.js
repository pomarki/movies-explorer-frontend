import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({
  isOpen,
  onDelete,
  onSubmit,
  filtredMovies,
  savedMovies,
  isDurationFilter,
  buttonState,
  message,
  isLoading,
}) {

  let actualMoviesArr;

    (message === "" && filtredMovies.length === 0) ? actualMoviesArr = savedMovies : actualMoviesArr = filtredMovies;


  



  return (
    <>
      <Header />
      <main
        className={`saved-movies ${
          isOpen && "saved-movies_opened"
        } page__section`}
      >
        <SearchForm
          onSubmit={onSubmit}
          onFilter={isDurationFilter}
          buttonState={buttonState}
          message={message}
        />
        <MoviesCardList
          message={message}
          isOpen={true}
          filtredMovies={filtredMovies}
          movies={actualMoviesArr} 
          listTypeSaved={true}
          onDelete={onDelete}
          isLoading={isLoading}
        />
      </main>
      <Footer isOpen={true} />
    </>
  );
}

export default SavedMovies;
