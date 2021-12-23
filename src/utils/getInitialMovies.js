import movies from "./MoviesApi";


function getInitialMovies() {
    const baseURL = "https://api.nomoreparties.co";
    const notFoundImage =
      "https://ic.pics.livejournal.com/pomarki/910249/22199/22199_900.png";
    const noDate = "нет данных";
    const noTrailer = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  
    movies()
      .then((data) => {
        const moviesArrow = data.map((item) => {
          const image = item.image.formats?.small?.url
            ? baseURL + item.image.formats?.small?.url
            : notFoundImage;
          const thumbnail = item.image.formats?.thumbnail?.url
            ? baseURL + item.image.formats?.thumbnail?.url
            : notFoundImage;
          const country = item.country ? item.country : noDate;
          const director = item.director ? item.director : noDate;
          const duration = item.duration ? item.duration : 0;
          const year = item.year ? item.year : 0;
          const description = item.description ? item.description : noDate;
          const trailerLink = item.trailerLink ? item.trailerLink : noTrailer;
          const nameRU = item.nameRU ? item.nameRU : item.nameEN;
          const nameEN = item.nameEN ? item.nameEN : noDate;
          return {
            country: country,
            director: director,
            duration: duration,
            year: year,
            description: description,
            image: image,
            trailer: trailerLink,
            thumbnail: thumbnail,
            movieId: item.id,
            nameRU: nameRU,
            nameEN: nameEN,
          };
        });
        localStorage.setItem("beatMovies", JSON.stringify(moviesArrow));
      })
      .catch((err) => console.log(`Ошибко: ${err}`));
  }
  
  export default getInitialMovies;