const { check } = require("express-validator");

class Inscricao {
  rotas() {
    return {
      cadastrar: "/inscricoes/cadastro",
      alterar: "/inscricoes/:nome",
    };
  }

  static validacoes() {
    return [
      check("nomeEvento")
        .notEmpty()
        .withMessage("O nome do evento precisa ser preenchido"),
      check("qtd")
        .notEmpty()
        .withMessage("A quantidade precisa ser preenchida"),
      check("preco")
        .isCurrency()
        .withMessage("O preço precisa ser um valor monetário"),
      check("dataInicio")
        .notEmpty()
        .withMessage("A data inicial precisa ser preenchida"),
      check("dataFinal")
        .notEmpty()
        .withMessage("A data final precisa ser preenchida"),
      check("horaInicio")
        .notEmpty()
        .withMessage("A hora inicial precisa ser preenchida"),
      check("horaFinal")
        .notEmpty()
        .withMessage("A hora final precisa ser preenchida"),
      ,
      check("disponibilidade")
        .notEmpty()
        .withMessage("A disponibilidade precisa ser preenchida"),
      check("descricao")
        .notEmpty()
        .withMessage("A descrição precisa ser preenchida"),
    ];
  }
}

module.exports = Inscricao;
