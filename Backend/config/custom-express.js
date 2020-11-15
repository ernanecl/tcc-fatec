const express = require ('express');

function Express(){
    const app = express();

    app.use(express.urlencoded({extended: true})); //Pegar o corpo da requisição no navegador
    app.use(express.json()); //Pegar a requisição como json

    return app;
}

module.exports = Express();

