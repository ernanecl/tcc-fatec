const express = require ('express');
const rotaFuncionario = require('../rotas/RotasFuncionario');

function Express(){
    const app = express();

    app.use(express.urlencoded({extended: true})); //Pegar o corpo da requisição no navegador
    app.use(express.json()); //Pegar a requisição como json

    //add a rota de funcionário ao app
    app.use(rotaFuncionario);

    return app;
}

module.exports = Express();

