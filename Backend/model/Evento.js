const { check } = require("express-validator");
class Evento {
  rotas() {
    return {
      incluir: "/eventos/cadastro",
      consultarNome: "/eventos/nome_evento/:nome",
      consultarData: "/eventos/data/:data",
      consultarOrganizador: "/eventos/organizador/:organizador",
      alterar: "/eventos/:nome&:organizador",
    };
  }

  static validacoes() {
    return [
      check("nome").notEmpty().withMessage("O nome precisa ser preenchido"),
      check("organizador")
        .notEmpty()
        .withMessage("O evento precisa ser preenchido"),
      check("data").notEmpty().withMessage("A data precisa ser preenchida"),
      check("hora").notEmpty().withMessage("A hora precisa ser preenchido"),
      check("incricao")
        .isLength({ max: 3})
        .withMessage("Digite SIM ou NÃO para inscrição"),
      check("ficha").notEmpty().withMessage("A ficha precisa ser preenchida"),
      check("duracao").notEmpty().withMessage("O tempo precisa ser preenchido"),
      check("categoria")
        .notEmpty()
        .withMessage("A categoria precisa ser preenchida"),
      check("visibilidade")
        .notEmpty()
        .withMessage("A visibilidade precisa ser preenchida")
    ];
  }
}

module.exports = Evento;
