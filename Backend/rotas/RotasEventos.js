const EventoController = require ('../controller/EventosController');

//Essas rotas ainda não estão funcionando

const router = Router();
const eventos = new EventoController();

    router.route('/eventos/nome_evento/:nome')
        .get(eventos.listaNome);
    router.route('/eventos/data/:data')
        .get(eventos.listaData);
    router.route('/eventos/organizador/:organizador')
        .get(eventos.listaOrganizador);
    router.route('/eventos/cadastro')
        .post(eventos.inserir);

module.exports = router;