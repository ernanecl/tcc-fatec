const { check } = require("express-validator");
class Evento {
  rotas() {
    return {
      incluir: "/eventos/cadastro",
      consultarNome: "/eventos/nome_evento/:nome",
      consultarData: "/eventos/data/:data",
      consultarOrganizador: "/eventos/organizador/:organizador",
      alterar: "eventos/:nome&:organizador",
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
        .isLength({ min: 3, max: 3 })
        .withMessage("Digite SIM ou NÃO para inscrição"),
      check("ficha").notEmpty().withMessage("A ficha precisa ser preenchida"),
      check("tempo").notEmpty().withMessage("O tempo precisa ser preenchido"),
      check("categoria")
        .notEmpty()
        .withMessage("A categoria precisa ser preenchida"),
      check("visibilidade")
        .notEmpty()
        .withMessage("A visibilidade precisa ser preenchida"),
      check("termo").notEmpty().withMessage("O termo precisa ser preenchido"),
    ];
  }
}

module.exports = Evento;
