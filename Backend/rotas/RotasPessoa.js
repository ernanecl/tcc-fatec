const express = require("express");
const router = express.Router();
const Pessoa = require("../model/Pessoa");
const PessoaController = require("../controller/PessoaController");

const pessoa = new PessoaController();
const rotas = new Pessoa().rotas();

router.post(rotas.cadastro, pessoa.cadastro);
