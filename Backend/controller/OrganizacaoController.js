const OrganizacaoDao = require("../dao/OrganizacaoDao");
const UsuarioController = require("./UsuarioController");
const { validationResult } = require("express-validator");
const alterarRgCpf = require("../utils/alterarRgCpf");
const verificarAlteracao = require("../utils/verificandoAlteracao");

const organizacaoDao = new OrganizacaoDao();
const usuarioController = new UsuarioController();

class OrganizacaoController {
  cadastro(req, res) {
    const organizacao = req.body;

    let erros = validationResult(req);
    //verificando se houve erro de validação
    if (!erros.isEmpty()) {
      console.log(erros);
      res.send("Erros de validação " + erros);
    } else {
      //inserindo organização na tabela de usuário
      usuarioController.inserirUsuario(
        organizacao.email,
        organizacao.senha,
        "NÃO"
      );
      //inserindo o organização na tabela de organizações
      organizacaoDao.inserir(organizacao, (erro) => {
        if (erro) {
          console.log(erro);
          res.send("Ocorreu um erro");
        } else {
          console.log("Organização cadastrada!");
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
      organizacaoDao.atualizar(email, valores, (erro, resultado) => {
        if (erro) {
          console.log("Ocorreu um erro " + erro);
          res.status(500).send("Ocorreu um erro");
          return;
        }
        verificarAlteracao(resultado, res);
      });
    }
  }
}

module.exports = OrganizacaoController;
