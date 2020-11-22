const { check } = require('express-validator');

class Contato{
    rotas(){
        return{
            cadastro: '/contatos/cadastro'
        }
    }

    static validacoes(){
        check('nome').notEmpty().withMessage("O nome precisa ser preenchido"),
        check('email').notEmpty().withMessage("O email precisa ser preenchido"),
        check('tel').notEmpty().withMessage("O telefone precisa ser preenchido"),
        check('msg').notEmpty().withMessage("A mensagem precisa ser preenchida")
    }
}

module.exports = Contato;