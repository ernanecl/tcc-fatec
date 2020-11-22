const express = require("express");
const OrganizacaoController = require("../controller/OrganizacaoController");
const Organizacao = require('../model/Organizacao');

const router = express.Router();
const organizao = new OrganizacaoController();
const rotas = new Organizacao().rotas();

router.post(rotas.cadastro, Organizacao.validacoes(), organizao.cadastro);

module.exports = router;