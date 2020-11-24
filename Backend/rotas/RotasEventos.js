const express = require('express');
const EventoController = require("../controller/EventosController");
const Evento = require("../model/Evento");

//Essas rotas ainda não estão funcionando

const router = express.Router();
const eventos = new EventoController();
const rotas = new Evento().rotas();

router.get(rotas.consultaNome, eventos.listaNome);
router.get(rotas.consultaData, eventos.listaData);
router.get(rotas.consultaOrganizador, eventos.listaOrganizador);
router.post(rotas.cadastro, Evento.validacoes(), eventos.inserir);
router.put(rotas.alteracao, eventos.atualizar);

module.exports = router;
