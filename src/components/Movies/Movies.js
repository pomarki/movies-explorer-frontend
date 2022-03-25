import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";


function Movies({
  message,
  filtredMovies,
  savedMovies,
  onSubmit,
  onLike,
  onDelete,
  isDurationFilter,
  buttonState,
  isLoading,
  searchQuery,
}) {
  function comparisonArrows(filterArr, savedArr) {
    let result = [];

    for (let i = 0; i < savedArr.length; i++) {
      for (let j = 0; j < filterArr.length; j++) {
        if (savedArr[i].movieId === filterArr[j].movieId) {
          result.push(savedArr[i]);
        }
      }
    }

    return result;
  }

  const different = comparisonArrows(filtredMovies, savedMovies);

  return (
    <>
      <Header isOpen={true}/>
      <main className="page__section">
        <SearchForm
          onSubmit={onSubmit}
          onFilter={isDurationFilter}
          buttonState={buttonState}
          isLoading={isLoading}
          message={message}
          searchQuery={searchQuery}
        />
        <MoviesCardList
          isLoading={isLoading}
          isOpen={true}
          movies={filtredMovies}
          listTypeSaved={false}
          onLike={onLike}
          onDelete={onDelete}
          likedMovies={different}
          savedMovies={savedMovies}
        />
      </main>
      <Footer isOpen={true} />
    </>
  );
}

export default Movies;
