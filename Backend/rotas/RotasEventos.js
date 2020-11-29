const express = require("express");
const router = express.Router();
const EventoController = require("../controller/EventoController");
const Evento = require("../model/Evento");
const rotas = new Evento().rotas();

const eventosController = new EventoController();

router.route(rotas.consultarNome)
    .get(eventosController.listarPorNome);
router.route(rotas.consultarData)
    .get(eventosController.listarPorData);
router.route(rotas.consultarOrganizador)
    .get(eventosController.listarPorOrganizador);
router.route(rotas.incluir)
    .post(Evento.validacoes(), eventosController.cadastrar);
router.route(rotas.alterar)
    .put(eventosController.atualizar);

module.exports = router;
