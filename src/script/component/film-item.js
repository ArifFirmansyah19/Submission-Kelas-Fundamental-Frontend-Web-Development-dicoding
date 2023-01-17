class FilmItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        const linkImage = `https://image.tmdb.org/t/p/w500${this._movie.poster_path}`;
        this.shadowDOM.innerHTML = `
        <style>

        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    
    .card2 {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 5px;
        text-align: justify;
        background-color: #C7C7C7;
        margin: 20px 20px 20px 20px;
        overflow: auto;
    }

            :host{
                display: block;
                margin-top: 20px;
                float: left;
                width: 24%;
                margin-left: 10px;
                height:600px;
               background-color: grey;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                margin-bottom: 15px;
                overflow: hidden;
                font-size: 12px;

            }

            .filmitem > img{
                width: 100%;
                padding:15px;
                border-radius:10px;
                height: 400px;
            }

            .filminfo {
                display: block;
                padding: 5px;
                margin-bottom: 15px;
            }


        </style>
        <div class="card2">
        <div class="filmitem ">
        <img src="${linkImage}" class="img-item-film" alt="Film image">
        <div class="filminfo">
            <h3>${this._movie.title}</h3>
            <p><b>Description: </b> ${this._movie.overview}</p>
        </div>
        </div>
        `;
    }
}

customElements.define('film-item', FilmItem);