const express = require("express");
const router = express.Router();
const FuncionarioController = require("../controller/FuncionarioController");
const Funcionario = require("../model/Funcionario");
const rotas = new Funcionario().rotas();

const funcionarioController = new FuncionarioController();

router.route(rotas.consultarPorEmail)
  .get(funcionarioController.listarPorEmail);
router.route(rotas.consultarPorNome)
  .get(funcionarioController.listarPorNome);
router.route(rotas.consultarPorCpf)
  .get(funcionarioController.listarPorCpf);
router.route(rotas.consultarPorCargo)
  .get(funcionarioController.listarPorCargo);
router.route(rotas.incluir)
  .post(
  Funcionario.validacoes(),
  funcionarioController.cadastrar
);
router.route(rotas.alterar)
  .put(funcionarioController.atualizar);
router.route(rotas.excluirRg)
  .delete(funcionarioController.removerPorRg);
router.route(rotas.excluirCpf)
  .delete(funcionarioController.removerPorCpf);

//exportando o router
module.exports = router;
