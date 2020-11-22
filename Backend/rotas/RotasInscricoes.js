const express = require('express');
const Inscricao = require('../model/Inscricao');
const InscricaoController = require('../controller/InscricaoController');

const router = express.Router();
const rotas = new Inscricao().rotas();
const inscricao = new InscricaoController();

router.post(rotas.cadastro, Inscricao.validacoes(), inscricao.cadastro);

module.exports = router;