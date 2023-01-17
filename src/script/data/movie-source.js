import data1 from "./data1.js";

class MovieSource {
    static searchMovie(judulFilm) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f833e827397782d6e3be0761cc11538&query=${judulFilm}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${judulFilm} is not found`);
                }
            })
    }
}

export default MovieSource;