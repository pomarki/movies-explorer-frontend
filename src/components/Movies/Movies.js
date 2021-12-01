import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";

function Movies(props) {
    return (
      <div className="movies">
        <Header isOpen={true} navTypeSmall={true} />
        <SearchForm />
      </div>
    );
  }
  
  export default Movies;