import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ isOpen, filtredMovies, savedMovies, onSubmit, onLike }) {
  function comparisonArrows(allMovies, myMovies) {
    let allIdArrow = [];
    let allIdMy = [];
    let result = [];

    allMovies.forEach((element) => {
      allIdArrow.push(element.movieId);
    });
    myMovies.forEach((element) => {
      allIdMy.push(element.movieId);
    });

    let map = allMovies.reduce((acc, i) => {
      acc[i] = acc[i] ? acc[i] + 1 : 1;
      return acc;
    }, {});

    for (let i = 0; i < myMovies.length; i++) {
      const current = myMovies[i];
      let count = map[current];

      if (count && count > 0) {
        result.push(current);
        map[current] -= 1;
      }
    }

    return result;
  }

  const different = comparisonArrows(filtredMovies, savedMovies);

  return (
    <>
      <Header />
      <main className={`movies page__section ${isOpen && "movies_opened"}`}>
        <SearchForm onSubmit={onSubmit} />
        <MoviesCardList
          isOpen={true}
          movies={filtredMovies}
          listTypeSaved={false}
          onLike={onLike}
          likedMovies={different}
        />
      </main>
      <Footer isOpen={true} />
    </>
  );
}

export default Movies;
