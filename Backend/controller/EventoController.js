const EventosDao = require("../dao/EventoDao");
const { validationResult } = require("express-validator");
const moment = require("moment");
const verificarAlteracao = require("../utils/verificarAlteracao");
const verificarResultado = require("../utils/verificarResultado");
const eventoDao = new EventoDao();

class EventoController {
  listaNome(req, res) {
    const nome = req.params.nome;

    eventoDao.listaPorNome(nome, (erro, resultado) => {
      if (erro) {
        console.log(erro);
        res.status(500).send("Ocorreu um erro");
        return;
      } 
      verificarResultado(resultado, res);
    });
  }

  listaData(req, res) {
    const data = req.params.data;

    //usando o moment para formatar a data recebida
    data = moment(data, "DD-MM-YYYY").format("YYYY-MM-DD");
    eventoDao.listaPorData(data, (erro, resultado) => {
      if (erro) {
        console.log(erro);
        res.status(500).send("Ocorreu um erro");
        return;
      } 
      verificarResultado(resultado, res);
    });
  }

  listaOrganizador(req, res) {
    const organizador = req.params.organizador;

    eventoDao.listaPorOrganizador(organizador, (erro, resultado) => {
      if (erro) {
        console.log(erro);
        res.status(500).send("Ocorreu um erro");
        return;
      } 
      verificarResultado(resultado, res);
    });
  }

  cadastro(req, res) {
    const evento = req.body;
    evento.data = moment(evento.data, "DD/MM/YYYY").format("YYYY-MM-DD");

    let erros = validationResult(req);

    if (!erros.isEmpty()) {
      console.log(erros);
      res.send("Erros de validação " + erros);
    } else {
      eventoDao.inserir(evento, (erro) => {
        if (erro) {
          console.log(erro);
          res.send("Ocorreu um erro");
        } else {
          console.log("Evento cadastrado");
          res.status(201).send("Cadastrado com sucesso!");
        }
      });
    }
  }

  atualizar(req, res) {
    const nome = req.params.nome;
    const organizador = req.params.organizador;
    const valores = req.body;

    //verificando se é algum desses campos que estão sendo alterados
    if (
      valores.nome ||
      valores.imagem ||
      valores.ficha ||
      valores.descricao ||
      valores.visibilidade
    ) {
      eventoDao.atualizar(nome, organizador, valores, (erro, resultado) => {
        if (erro) {
          console.log("Ocorreu um erro " + erro);
          res.status(500).send("Ocorreu um erro");
        } else {
          verificarAlteracao(resultado, res);
        }
      });
    } else {
      console.log("Há campos que não podem ser alterados!");
      res.send("Há campos que não podem ser alterados!");
    }
  }
}

module.exports = EventoController;
