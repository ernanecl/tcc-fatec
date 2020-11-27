const express = require("express");
const OrganizacaoController = require("../controller/OrganizacaoController");
const Organizacao = require("../model/Organizacao");

const router = express.Router();
const organizaoController = new OrganizacaoController();
const rotas = new Organizacao().rotas();

router.get(rotas.consultarNome, organizaoController.consultaPorNome);
router.get(rotas.consultarCnpj, organizaoController.consultaPorCnpj);
router.post(rotas.cadastro, Organizacao.validacoes(), organizaoController.cadastro);
router.put(rotas.alterar, organizao.alterar);

module.exports = router;
