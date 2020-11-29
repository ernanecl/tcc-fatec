const express = require ('express');
const rotasFuncionario = require('../rotas/RotasFuncionarios');
const rotasEvento = require('../rotas/RotasEventos');
const rotasOrganizacao = require('../rotas/RotasOrganizacoes');
const rotasPessoa = require('../rotas/RotasPessoas');
const rotasInscricao = require('../rotas/RotasInscricoes');
const rotasContato = require('../rotas/RotasContatos');

function Express(){
    const app = express();
    app.use(express.urlencoded({extended: true})); //Pegar o corpo da requisição no navegador
    app.use(express.json()); //Pegar a requisição como json

    app.use(rotasContato);
    app.use(rotasEvento);
    app.use(rotasFuncionario);
    app.use(rotasInscricao);
    app.use(rotasOrganizacao);
    app.use(rotasPessoa);
    
    return app;
}

module.exports = Express();

