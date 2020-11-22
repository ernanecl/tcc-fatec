const { check } = require('express-validator');

class Organizacao {

    validacoes(){
        return [
            check("nome").notEmpty().withMessage("Nome precisa ser preenchido"),
            check("end").notEmpty().withMessage("Endereço precisa ser preenchido"),
            check("bairro").notEmpty().withMessage("Bairro precisa ser preenchido"),
            check("cidade").notEmpty().withMessage("Cidade precisa ser preenchido"),
            check("cep").notEmpty().withMessage("CEP precisa ser preenchido"),
            check("fone").notEmpty().withMessage("Telefone precisa ser preenchido"),
            check("email").notEmpty().withMessage("E-mail precisa ser preenchido"),
            check("cnpj").notEmpty().withMessage("CNPJ precisa ser preenchido"),
            check("senha")
                .isLength({ min: 8, max: 30 })
                .withMessage("A senha precisa ter entre 8 e 30 caracteres")
        ]
    }
}

module.exports = Organizacao;