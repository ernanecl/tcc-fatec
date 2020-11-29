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

    app.use(rotasFuncionario);
    app.use(rotasContato);
    

    //add a rotas ao app
     
   


    return app;
}

module.exports = Express();

