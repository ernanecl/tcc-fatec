const FuncionarioDao = require("../dao/FuncionarioDao");
const { validationResult } = require("express-validator");
const UsuarioController = require("./UsuarioController");
const alterarRgCpf = require("../utils/alterarRgCpf");
const verificarAlteracao = require("../utils/verificarAlteracao");
const verificarResultado= require("../utils/verificarResultado");
const funcionarioDao = new FuncionarioDao();
const usuarioController = new UsuarioController();

class FuncionarioController {
  consultaPorEmail(req, res){
    const email = req.params.email;

    funcionarioDao.listarPorEmail(email, (erro, resultado)=>{
      if(erro){
        console.log('Ocorreu um erro ' + erro);
        res.status(500).send('Ocorreu um erro!');
        return;
      }
      verificarResultado(resultado, res);
    });
  }
  consultaPorNome(req, res){
    const nome = req.params.nome;

    funcionarioDao.listarPorNome(nome, (erro, resultado)=>{
      if(erro){
        console.log('Ocorreu um erro ' + erro);
        res.status(500).send('Ocorreu um erro!');
        return;
      }
      verificarResultado(resultado, res);
    });
  }
  consultaPorCpf(req, res){
    const cpf = req.params.cpf;

    funcionarioDao.listarPorCpf(cpf, (erro, resultado)=>{
      if(erro){
        console.log('Ocorreu um erro ' + erro);
        res.status(500).send('Ocorreu um erro!');
        return;
      }
      verificarResultado(resultado, res);
    });
  }
  consultaPorCargo(req, res){
    const cargo = req.params.cargo;

    funcionarioDao(cargo, (erro, resultado)=>{
      if(erro){
        console.log('Ocorreu um erro ' + erro);
        res.status(500).send('Ocorreu um erro!');
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
      console.log("Ocorreram erros na validação " + erros);
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

    if (alterarRgCpf(valores, res)) {
      return;
    } else {
      funcionarioDao.atualizar(email, valores, (erro, resultado) => {
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

module.exports = FuncionarioController;
