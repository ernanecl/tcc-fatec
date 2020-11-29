const express = require("express");
const router = express.Router();
const Pessoa = require("../model/Pessoa");
const PessoaController = require("../controller/PessoaController");
const rotas = new Pessoa().rotas();

const pessoaController = new PessoaController();


router.route(rotas.consultar)
    .get(pessoaController.listar);
router.route(rotas.incluir)
    .post(Pessoa.validacoes(), pessoaController.cadastrar);
router.route(rotas.alterar)
    .put(pessoaController.atualizar);

module.exports = router;