const router = Router();
const FuncionarioController = require('../controller/FuncionariosController');

const funcionarioController = new FuncionarioController();

//Qual é o mecanismo de busca do funcionário?
    router.route('/funcionarios/cadastro')
        .post(funcionarioController.cadastro);
    router.route()
        .get();