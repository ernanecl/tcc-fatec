const FuncionarioDao = require("../dao/FuncionarioDao");
const { validationResult } = require("express-validator");
const UsuarioController = require("./UsuarioController");
const alterarRgCpf = require("../utils/alterarRgCpf");
const verificarResultado = require("../utils/verificarResultado");
const verificarAlteracao = require("../utils/verificarAlteracao");
const funcionarioDao = new FuncionarioDao();
const usuarioController = new UsuarioController();

class FuncionarioController {
  consultaPorEmail(req, res) {
    const email = req.params.email;

    funcionarioDao.listarPorEmail(email, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro!");
        return;
      }
      verificarResultado(resultado, res);
    });
  }
  consultaPorNome(req, res) {
    const nome = req.params.nome;

    funcionarioDao.listarPorNome(nome, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro!");
        return;
      }
      verificarResultado(resultado, res);
    });
  }
  consultaPorCpf(req, res) {
    const cpf = req.params.cpf;

    funcionarioDao.listarPorCpf(cpf, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro!");
        return;
      }
      verificarResultado(resultado, res);
    });
  }
  consultaPorCargo(req, res) {
    const cargo = req.params.cargo;

    funcionarioDao(cargo, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro!");
        return;
      }
      verificarResultado(resultado, res);
    });
  }

  cadastro(req, res) {
    const funcionario = req.body;

    const erros = validationResult(req);

    //verificando se houve erro de validação
    if (!erros.isEmpty()) {
      console.log(erros);
      res.send("Erros de validação " + erros);
    } else {
      usuarioController.inserirUsuario(
        funcionario.email,
        funcionario.senha,
        "SIM"
      );
      //inserindo o funcionário na tabela de funcionários
      funcionarioDao.inserir(funcionario, (erro) => {
        if (erro) {
          console.log(erro);
        } else {
          console.log("Funcionário cadastrado!");
          res.status(201).send("Cadastrado com sucesso!");
        }
      });
    }
  }

  alterar(req, res) {
    const email = req.params.email;
    const valores = req.body;
    console.log(email);
    if (alterarRgCpf(valores, res)) {
      return;
    } else {
      funcionarioDao.atualizar(email, valores, (erro, resultado) => {
        console.log(resultado);
        if (erro) {
          console.log("Ocorreu um erro " + erro);
          res.send("Ocorreu um erro");
          return;
        }
        if (verificarAlteracao(res, resultado.changedRows)) {
          console.log("Alterado com sucesso!");
          res.status(200).send("Alterado com sucesso!");
        }
      });
    }
  }

  excluirPorRg(req, res) {
    const rg = req.params.rg;

    funcionarioDao.deletarPorRG(rg, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro");
        return;
      }
    });
  }
  excluirPorCpf(req, res) {
    const cpf = req.params.rg;

    funcionarioDao.deletarPorCpf(cpf, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro");
        return;
      }
    });
  }
}

module.exports = FuncionarioController;
