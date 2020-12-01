const OrganizacaoDao = require("../dao/OrganizacaoDao");
const UsuarioController = require("./UsuarioController");
const { validationResult } = require("express-validator");
const alterarRgCpf = require("../utils/alterarRgCpf");
const verificarAlteracao = require("../utils/verificarAlteracao");
const verificarResultado = require("../utils/verificarResultado");

const organizacaoDao = new OrganizacaoDao();
const usuarioController = new UsuarioController();

class OrganizacaoController {
  listarPorNome(req, res){
    const nome = req.params.nome;

    organizacaoDao.listarPorNome(nome, (erro, resultado)=>{
      if(erro){
        console.log("Ocorreu um erro " + erro);
        res.status(500).send('Ocorreu um erro');
        return;
      }
      //Fazendo a verificação se trouxe algum resultado ou não
      verificarResultado(resultado, res);
    });
  }
  listarPorCnpj(req, res){
    const cnpj = req.params.cnpj;

    organizacaoDao.listarPorCnpj(cnpj, (erro, resultado) =>{
      if(erro){
        console.log("Ocorreu um erro " + erro);
        res.status(500).send('Ocorreu um erro');
        return;
      }
      verificarResultado(resultado, res);
    });
  }
  cadastrar(req, res) {
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
          res.status(500).send("Ocorreu um erro");
        } else {
          console.log("Organização cadastrada!");
          res.status(201).send("Cadastrado com sucesso!");
        }
      });
    }
  }
  atualizar(req, res) {
    const email = req.params.email;
    const valores = req.body;
    //Verificando se está tentando alterar rg ou cpf
    if (alterarRgCpf(valores, res)) {
      return;
    } else {
      organizacaoDao.atualizar(email, valores, (erro, resultado) => {
        if (erro) {
          console.log("Ocorreu um erro " + erro);
          res.status(500).send("Ocorreu um erro");
          return;
        }
        //Verificando se houve alguma alteração na tabela
        if (verificarAlteracao(res, resultado.changedRows)) {
          console.log("Alterado com sucesso!");
          res.status(200).send("Alterado com sucesso!");
        }
      });
    }
  }
}

module.exports = OrganizacaoController;
