const FuncionarioDao = require("../dao/FuncionarioDao");
const { validationResult } = require("express-validator");
const UsuarioController = require("./UsuarioController");
const alterarRgCpf = require("../utils/alterarRgCpf");
const verificarResultado = require("../utils/verificarResultado");
const verificarAlteracao = require("../utils/verificarAlteracao");
const verificarExclusao = require("../utils/verificarExclusao");
const formatarMascaras = require("../utils/formatarMascaras");
const funcionarioDao = new FuncionarioDao();
const usuarioController = new UsuarioController();

class FuncionarioController {
  listarPorEmail(req, res) {
    const email = req.params.email;

    funcionarioDao.listarPorEmail(email, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro!");
        return;
      }
      //Verificando se houve algum resultado a busca
      verificarResultado(resultado, res);
    });
  }
  listarPorNome(req, res) {
    const nome = req.params.nome;

    funcionarioDao.listarPorNome(nome, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro!");
        return;
      }
      console.log(resultado);
      verificarResultado(resultado, res);
    });
  }
  listarPorCpf(req, res) {
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
  listarPorCargo(req, res) {
    const cargo = req.params.cargo;

    funcionarioDao.listarPorCargo(cargo, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro!");
        return;
      }
      verificarResultado(resultado, res);
    });
  }

  cadastrar(req, res) {
    const funcionario = req.body;
    let formatado = formatarMascaras(funcionario);
    
    const erros = validationResult(req);

    //verificando se houve erro de validação
    if (!erros.isEmpty()) {
      console.log('Erros de validação ' + JSON.stringify(erros));
      res.send("Erros de validação " + erros);
    } else {
      if(verificarExistencia(formatado) ==1){
        usuarioController.inserirUsuario(
          funcionario.email,
          funcionario.senha,
          formatado.cpf,
          1
        );
        //inserindo o funcionário na tabela de funcionários
        funcionarioDao.inserir(formatado, (erro) => {
          if (erro) {
            console.log(erro);
          } else {
            console.log("Funcionário cadastrado!");
            res.status(201).send("Cadastrado com sucesso!");
          }
        });
      }else{
        res.send("Não foi possivel cadastrar, info duplicada!");
      }
     
    }
  }

  atualizar(req, res) {
    const email = req.params.email;
    const valores = req.body;
    
    //Verificando se está tentando alterar rg ou cpf
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
        //Verificando alteração na tabela
        if (verificarAlteracao(res, resultado.changedRows)) {
          console.log("Alterado com sucesso!");
          res.status(200).send("Alterado com sucesso!");
        }
      });
    }
  }

  removerPorRg(req, res) {
    const rg = req.params.rg;

    funcionarioDao.deletarPorRG(rg, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro");
        return;
      }
        if(verificarExclusao(res, resultado.affectedRows)){
          console.log("Excluído com sucesso!");
          res.status(200).send("Excluído com sucesso!");
        }
    });
  }
  removerPorCpf(req, res) {
    const cpf = req.params.cpf;

    funcionarioDao.deletarPorCpf(cpf, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro");
        return;
      }
      //Verificando se realmente algo foi deletado
      if(verificarExclusao(res, resultado.affectedRows)){
        console.log("Excluído com sucesso!");
        res.status(200).send("Excluído com sucesso!");
      }
    });
  }
}

module.exports = FuncionarioController;
