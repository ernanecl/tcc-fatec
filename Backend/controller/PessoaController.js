const PessoaDao = require("../dao/PessoaDao");
const UsuarioController = require("./UsuarioController");

const pessoaDao = new PessoaDao();
const usuarioController = new UsuarioController();

class PessoasController {
  cadastro(req, res) {
    const pessoa = req.body;

    usuarioController.inserirUsuario(pessoa.email, pessoa.senha, "SIM");
    //inserindo o funcionário na tabela de funcionários
    pessoaDao.inserir(pessoa, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Pessoa cadastrado!");
        res.status(201).send("Pessoa cadastrado com sucesso");
      }
    });
  }
}
module.exports = PessoasController;
