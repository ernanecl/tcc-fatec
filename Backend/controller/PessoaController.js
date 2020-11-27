const PessoaDao = require("../dao/PessoaDao");
const UsuarioController = require("./UsuarioController");
const { validationResult } = require("express-validator");
const alterarRgCpf = require("../utils/alterarRgCpf");
const verificarAlteracao = require("../utils/verificarAlteracao");
const verificarResultado = require("../utils/verificarResultado");

const pessoaDao = new PessoaDao();
const usuarioController = new UsuarioController();

class PessoasController {
  consulta(req, res) {
    const cpf = req.params.cpf;

    pessoaDao.listar(cpf, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro");
        return;
      }
      verificarResultado(resultado, res);
    });
  }
  cadastro(req, res) {
    const pessoa = req.body;

    let erros = validationResult(req);
    //verificando se houve erro de validação
    if (!erros.isEmpty()) {
      console.log("Ocorreram erros na validação " + erros);
      res.send("Erros de validação " + erros);
    } else {
      usuarioController.inserirUsuario(pessoa.email, pessoa.senha, "NÃO");
      //inserindo o pessoa na tabela de pessoas
      pessoaDao.inserir(pessoa, (erro) => {
        if (erro) {
          console.log(erro);
        } else {
          console.log("Pessoa cadastrado!");
          res.status(201).send("Cadastrado com sucesso!");
        }
      });
    }
  }

  alterar(req, res) {
    const email = req.params.email;
    const valores = req.body;

    if (alterarRgCpf(valores, res)) {
      return;
    } else {
      pessoaDao.atualizar(email, valores, (erro, resultado) => {
        if (erro) {
          console.log("Ocorreu um erro");
          res.status(500).send("Ocorreu um erro");
          return;
        }
        verificarAlteracao(result, res);
      });
    }
  }
}

module.exports = PessoasController;
