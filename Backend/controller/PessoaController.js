const PessoaDao = require("../dao/PessoaDao");
const UsuarioController = require("./UsuarioController");
const { validationResult } = require('express-validator');

const pessoaDao = new PessoaDao();
const usuarioController = new UsuarioController();

class PessoasController {
  cadastro(req, res) {
    const pessoa = req.body;

    let erros = validationResult(req);
    //verificando se houve erro de validação
    if (!erros.isEmpty()) {
      console.log("Ocorreram erros na validação " + erros);
      res.send("Erros de validação " + erros);
    }else{
      usuarioController.inserirUsuario(pessoa.email, pessoa.senha, "NÃO");
    //inserindo o pessoa na tabela de pessoas
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
}

module.exports = PessoasController;
