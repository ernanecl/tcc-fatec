const EventosController = require ('../controller/EventosController');

const router = Router();
const eventos = new EventosController();

    router.route('/eventos/nome_evento/:nome')
        .get(eventos.listaNome);
    router.route('/eventos/data/:data')
        .get(eventos.listaData);
    router.route('/eventos/organizador/:organizador')
        .get(eventos.listaOrganizador);