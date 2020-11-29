const express = require("express");
const router = express.Router();
const Inscricao = require("../model/Inscricao");
const InscricaoController = require("../controller/InscricaoController");
const rotas = new Inscricao().rotas();

const inscricaoController = new InscricaoController();

router.route(rotas.consultar)
    .get(inscricaoController.listar);
router.route(rotas.incluir)
     .post(Inscricao.validacoes(),inscricaoController.cadastrar);
router.route(rotas.alterar)
    .put(inscricaoController.atualizar);

module.exports = router;
