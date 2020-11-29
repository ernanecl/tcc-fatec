const express = require("express");
const EventoController = require("../controller/EventoController");
const Evento = require("../model/Evento");

//Essas rotas ainda não estão funcionando

const router = express.Router();
const eventos = new EventoController();
const rotas = new Evento().rotas();

// router.get(rotas.consultarNome, eventos.listaNome);
// router.get(rotas.consultarData, eventos.listaData);
// router.get(rotas.consultarOrganizador, eventos.listaOrganizador);
// router.post(rotas.cadastrar, Evento.validacoes(), eventos.inserir);
// router.put(rotas.alterar, eventos.atualizar);

module.exports = router;
