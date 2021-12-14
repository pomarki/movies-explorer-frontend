import "./SavedMovies.css"
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import {savedMovies} from "../../consts/initial-movies";

function SavedMovies({isOpen}) {
    
    return(
        <section className={`saved-movies ${isOpen && "saved-movies_opened"} page__section`}>
        <Header isOpen={true} navOpen={true} />
        <SearchForm />
        <MoviesCardList isOpen={true} movies={savedMovies} />
        <Footer isOpen={true} />
        </section>
    )
}

export default SavedMovies;