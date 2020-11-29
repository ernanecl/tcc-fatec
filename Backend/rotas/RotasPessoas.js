const express = require("express");
const router = express.Router();
const Pessoa = require("../model/Pessoa");
const PessoaController = require("../controller/PessoaController");

const pessoaController = new PessoaController();
const rotas = new Pessoa().rotas();

//router.get(rotas.consultar, pessoaController.consulta);
// router.post(rotas.cadastrar, Pessoa.validacoes(), pessoaController.cadastro);
// router.put(rotas.alterar, pessoaController.alterar);
