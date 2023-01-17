import '../component/film-list.js';
import '../component/search-bar.js'
import data1 from '../data/movie-source';

const main = () => {

    const searchElement = document.querySelector('search-bar');
    const filmListElement = document.querySelector('film-list');

    const onButtonSearchClicked = async() => {
        try {
            const result = await data1.searchMovie(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        filmListElement.movies = results;
    };

    const fallbackResult = message => {
        filmListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

    const topMovie = document.getElementById('topMovie');
    const url_APIRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4f833e827397782d6e3be0761cc11538&language=en-US&page=1';

    const getMovies = (url) => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                showMovies(data.results);
            }).catch(error => {
                showMessage(error);
            })
    };

    const showMovies = (data) => {
        topMovie.innerHTML = '';

        data.forEach(movie => {
            const { title, overview, poster_path, vote_average } = movie;
            const linkImage = `https://image.tmdb.org/t/p/w500${poster_path}`;

            const movieItemElement = document.createElement('div');
            movieItemElement.classList.add('movieRated');
            movieItemElement.innerHTML = `
            <img src="${linkImage}" alt="${title}">

            <div class="movieInfo">
                <h3> ${title}</h3>
                <span class="green">${vote_average}</span>
            </div>

            <div class="description">
            ${overview}
            </div>
            `;

            topMovie.appendChild(movieItemElement);
        });
    };

    getMovies(url_APIRated);


};

export default main;