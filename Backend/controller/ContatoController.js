const { validationResult } = require("express-validator");
const ContatoDao = require("../dao/ContatoDao");

const contatoDao = new ContatoDao();

class ContatoController {

  cadastrar(req, res) {
    const contato = req.body;

    let erros = validationResult(req);
    if (!erros.isEmpty()) {
      console.log(erros);
      res.send("Erros de validação " + erros);
    } else {
      contatoDao.inserir(contato, (erro) => {
        if (erro) {
          console.log(erro);
          res.status(500).send("Ocorreu um erro");
        } else {
          console.log("Enviado com sucesso!");
          res.status(201).send("Enviado com sucesso!");
        }
      });
    }
  }
}

module.exports = ContatoController;
