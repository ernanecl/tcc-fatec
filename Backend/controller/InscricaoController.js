const InscricaoDao = require("../dao/InscricaoDao");
const moment = require("moment");
const { validationResult } = require("express-validator");
const verificarAlteracao = require("../utils/verificarAlteracao");

const inscricaoDao = new InscricaoDao();

class InscricaoController {
  consulta(req, res) {
    const nomeEvento = req.params.nomeEvento;

    inscricaoDao.listar(nomeEvento, (erro, resultado) => {
      if (erro) {
        console.log("Ocorreu um erro " + erro);
        res.status(500).send("Ocorreu um erro!");
        return;
      }

      res.status(200).json(resultado);
    });
  }
  cadastro(req, res) {
    const inscricao = req.body;
    inscricao.dataInicio = moment(inscricao.dataInicio, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    );
    inscricao.dataFinal = moment(inscricao.dataFinal, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    );

    let erros = validationResult(req);

    if (!erros.isEmpty()) {
      console.log(erros);
      res.send("Erros de validação " + erros);
    } else {
      inscricaoDao.inserir(inscricao, (erro) => {
        if (erro) {
          console.log(erro);
          res.send("Ocorreu um erro");
        } else {
          console.log("Inscrição cadastrado!");
          res.status(201).send("Cadastrado com sucesso!");
        }
      });
    }
  }

  atualizar(req, res) {
    const nome = req.params.nome;
    const valores = req.body;

    if (valores.qtd || valores.preco) {
      console.log("Esses campos precisam de autorização para alterar");
      res.send("Esses campos precisam de alteração para alterar");
      return;
    } else {
      inscricaoDao.atualizar(nome, valores, (erro, resultado) => {
        if (erro) {
          console.log("Ocorreu algum erro");
          res.send("Ocorreu algum erro");
        } else {
          //verificarAlteracao(resultado, res);
        }
      });
    }
  }
}

module.exports = InscricaoController;
