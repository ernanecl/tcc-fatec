const express = require("express");
const router = express.Router();
const FuncionarioController = require("../controller/FuncionariosController");
const Funcionario = require("../model/Funcionario");
const rotas = new Funcionario().rotas();

const funcionarioController = new FuncionarioController();
router.get(rotas.consultarPorEmail, funcionarioController.consultarPorEmail);
router.get(rotas.consultarPorNome, funcionarioController.consultarPorNome);
router.get(rotas.consultarPorCpf, funcionarioController.consultarPorCpf);
router.get(rotas.consultarPorCargo, funcionarioController.consultarPorCargo);
router.post(
  rotas.cadastrar,
  Funcionario.validacoes(),
  funcionarioController.cadastro
);
router.put(rotas.alterar, funcionarioController.alterar);

//exportando o router
module.exports = router;
