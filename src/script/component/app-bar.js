class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        
        :host {
            display: block;
            width: 100%;
            background-color: rgba(33,149,188,255);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            margin-bottom: 15px;
        }
        
        h1,
        h4 {
            text-align: center;
            padding: 10px;
            color: white;
        }
        


        h4 {
            padding-bottom: 30px;
            margin-bottom: 50px;
        }
    </style>
        <h1>Movie Search Detail</h1>
        <h4>Temukan film yang kamu inginkan untuk melihat detailnya</h4>
    `;
    }
}

customElements.define('app-bar', AppBar);