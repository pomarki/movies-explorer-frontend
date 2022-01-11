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
        />
        <MoviesCardList
          message={message}
          isOpen={true}
          /* movies={filtredMovies} */
          movies={savedMovies}
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
