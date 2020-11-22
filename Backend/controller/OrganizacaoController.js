const OrganizacaoDao = require('../dao/OrganizacaoDao');
const UsuarioController = require("./UsuarioController");
const { validationResult } = require ('express-validator');

const organizacaoDao = new OrganizacaoDao();
const usuarioController = new UsuarioController();

class OrganizacaoController{
    
    cadastro(req, res){
        let organizacao = req.body;

        let erros = validationResult(req);
        
        if(!erros.isEmpty()){
            console.log(erros);
            res.send("Erros de validação " + erros);
        }else{
            //inserindo organização na tabela de usuário
            usuarioController.inserirUsuario(
                organizacao.email,
                organizacao.senha,
                "NÃO"
            );
            
            organizacaoDao.inserir(organizacao, (erro) =>{
                if(erro){
                    console.log(erro);
                    res.send("Ocorreu um erro");
                }else{
                    console.log("Organização cadastrada!");
                    res.status(201).send("Organização cadastrada com sucesso!");
                }
            });
        }

        
    }
}

module.exports = OrganizacaoController;