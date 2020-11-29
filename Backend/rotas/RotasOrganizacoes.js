const express = require("express");
const router = express.Router();
const OrganizacaoController = require("../controller/OrganizacaoController");
const Organizacao = require("../model/Organizacao");
const rotas = new Organizacao().rotas();

const organizaoController = new OrganizacaoController();

router.route(rotas.consultarNome)
    .get(organizaoController.listarPorNome);
router.route(rotas.consultarCnpj)
    .get(organizaoController.listarPorCnpj);
router.route(rotas.incluir)
    .post(Organizacao.validacoes(), organizaoController.cadastrar);
router.route(rotas.alterar)
    .put(organizaoController.atualizar);

module.exports = router;
