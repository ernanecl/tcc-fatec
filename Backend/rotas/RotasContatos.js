const express = require("express");
const router = express.Router();
const Contato = require("../model/Contato");
const ContatoController = require("../controller/ContatoController");
const rotas = new Contato().rotas();

const contatoController = new ContatoController();

router.route(rotas.enviar)
    .post(contatoController.cadastrar);

module.exports = router;
