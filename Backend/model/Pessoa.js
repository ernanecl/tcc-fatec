const { check } = require("express-validator");
class Pessoa {
  rotas() {
    return {
      consultar: '/pessoas/:cpf',
      cadastrar: "/pessoas/cadastro",
      alterar: "/pessoas/:email",
    };
  }

  static validacoes() {
    return [
      check("nome").notEmpty().withMessage("Nome precisa ser preenchido"),
      check("rg").notEmpty().withMessage("RG precisa ser preenchido"),
      check("cpf").notEmpty().withMessage("CPF precisa ser preenchida"),
      check("end").notEmpty().withMessage("Endereço precisa ser preenchido"),
      check("bairro").notEmpty().withMessage("Bairro precisa ser preenchido"),
      check("cidade").notEmpty().withMessage("Cidade precisa ser preenchido"),
      check("cep").notEmpty().withMessage("CEP precisa ser preenchido"),
      check("fone").notEmpty().withMessage("Telefone precisa ser preenchido"),
      check("email").notEmpty().withMessage("Email precisa ser preenchido"),
      check("senha")
        .isLength({ min: 8, max: 30 })
        .withMessage("A senha precisa ter entre 8 e 30 caracteres"),
    ];
  }
}

module.exports = Pessoa;
