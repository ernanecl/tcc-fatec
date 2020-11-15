const router = Router();

    router.route('/eventos/nome_evento/:nome')
        .get();
    router.route('/eventos/data/:data')
        .get();
    router.route('/eventos/organizador/:organizador')
        .get();