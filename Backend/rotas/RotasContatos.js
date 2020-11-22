const express = require('express');
const Contato = require('../model/Contato');
const ContatoController = require('../controller/ContatoController');

const router = express.Router();
const rotas = new Contato().rotas();
const contato = new ContatoController();

router.post(rotas.cadastro, Contato.validacoes(), contato.cadastro);
module.exports  = router;