const express = require("express");
const router = express.Router();
const Pessoa = require("../model/Pessoa");
const PessoaController = require("../controller/PessoaController");

const pessoaController = new PessoaController();
const pessoa = new Pessoa();

router.post(pessoa.rotas().cadastro, pessoa.validacoes(), pessoaController.cadastro);
