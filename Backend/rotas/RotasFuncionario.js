const router = Router();
const FuncionarioController = require('../controller/FuncionariosController');
const Funcionario = require('../model/Funcionario')

const funcionarioController = new FuncionarioController();

//Qual é o mecanismo de busca do funcionário?
    router.route('/funcionarios/cadastro')
        .post(Funcionario.validacoes(),funcionarioController.cadastro);
    router.route()
        .get();