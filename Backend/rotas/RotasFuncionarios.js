const express = require("express");
const router = express.Router();
const FuncionarioController = require("../controller/FuncionarioController");
const Funcionario = require("../model/Funcionario");
const rotas = new Funcionario().rotas();

const funcionarioController = new FuncionarioController();

router.route(rotas.buscarPorEmail)
  .get(funcionarioController.consultaPorEmail);
router.route(rotas.buscarPorNome)
  .get(funcionarioController.consultaPorNome);
router.route(rotas.buscarPorCpf)
  .get(funcionarioController.consultaPorCpf);
router.route(rotas.buscarPorCargo)
  .get(funcionarioController.consultaPorCargo);
router.route(rotas.cadastrar)
  .post(
  Funcionario.validacoes(),
  funcionarioController.cadastro
);
router.route(rotas.alterar)
  .put(funcionarioController.alterar);
// router.route(rotas.excluirRg)
//   .delete(funcionarioController.excluirPorRg);
// router.route(rotas.excluirCpf)
//   .delete(funcionarioController.excluirPorCpf);

//exportando o router
module.exports = router;
