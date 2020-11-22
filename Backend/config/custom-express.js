const express = require ('express');
const rotasFuncionario = require('../rotas/RotasFuncionario');
const rotasEvento = require('../rotas/RotasEventos');
const rotasOrganizacao = require('../rotas/RotasOrganizacoes');
const rotasPessoa = require('../rotas/RotasPessoas');

function Express(){
    const app = express();

    app.use(express.urlencoded({extended: true})); //Pegar o corpo da requisição no navegador
    app.use(express.json()); //Pegar a requisição como json

    //add a rotas ao app
    app.use(rotasFuncionario);
    app.use(rotasEvento);
    app.use(rotasOrganizacao);
    app.use(rotasPessoa);


    return app;
}

module.exports = Express();

