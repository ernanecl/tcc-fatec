const express = require("express");
const Inscricao = require("../model/Inscricao");
const InscricaoController = require("../controller/InscricaoController");

const router = express.Router();
const rotas = new Inscricao().rotas();
const inscricao = new InscricaoController();

router.post(rotas.cadastrar, Inscricao.validacoes(), inscricao.cadastro);
router.put(rotas.alterar, inscricao.atualizar);

module.exports = router;
