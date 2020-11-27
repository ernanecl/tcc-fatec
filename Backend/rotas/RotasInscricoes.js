const express = require("express");
const Inscricao = require("../model/Inscricao");
const InscricaoController = require("../controller/InscricaoController");

const router = express.Router();
const rotas = new Inscricao().rotas();
const inscricaoDao = new InscricaoController();

router.get(rotas.consultar, inscricaoDao.consulta);
router.post(rotas.cadastrar, Inscricao.validacoes(), inscricaoDao.cadastro);
router.put(rotas.alterar, inscricaoDao.atualizar);

module.exports = router;
