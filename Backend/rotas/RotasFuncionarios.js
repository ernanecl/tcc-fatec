const express = require("express");
const router = express.Router();
const FuncionarioController = require("../controller/FuncionariosController");
const Funcionario = require("../model/Funcionario");
const rotas = new Funcionario().rotas();

const funcionarioController = new FuncionarioController();

router.post(
  rotas.cadastrar,
  Funcionario.validacoes(),
  funcionarioController.cadastro
);

//exportando o router
module.exports = router;
