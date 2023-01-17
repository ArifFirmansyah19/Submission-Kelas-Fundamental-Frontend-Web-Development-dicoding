class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchMovie').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            margin: 32px auto;
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 20px;
            border-radius: 10px;
            margin-top: 10px;
            display: block;
            top: 10px;
            background-color: white;
        }
        
        .konten-search>input {
            width: 70%;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid rgb(74, 72, 72);
            font-weight: bold;
        }
        
        .konten-search>input:focus {
            outline: 0;
            border-bottom: 2px solid rgb(51, 52, 55);
        }
        
        .konten-search>input::placeholder {
            color: rgb(3, 3, 3);
            font-weight: normal;
        }
        
        .konten-search>button {
            width: 23%;
            border-radius: 10px;
            cursor: pointer;
            margin-left: 30px;
            padding: 16px;
            background-color: cornflowerblue;
            color: white;
            border: 0;
            text-transform: uppercase;
        
        }
        
        @media screen and (max-width: 550px) {
            .search-container {
                flex-direction: column;
                position: static;
            }
            .konten-search>input {
                width: 100%;
                margin-bottom: 12px;
            }
            .konten-search>button {
                width: 100%;
            }
        }
    </style>


    <div id="search-container" class="search-container">
        <div class="konten-search">
            <input type="search" id="searchMovie" placeholder="Silahkan ketikkan judul film">
            <button id="searchButtonMovie" type="submit">Search</button>
        </div>
    </div>  
    


    `;

        this.shadowDOM.querySelector('#searchButtonMovie').addEventListener('click', this._clickEvent);
    }
}


customElements.define('search-bar', SearchBar);