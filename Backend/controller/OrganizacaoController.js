const OrganizacaoDao = require('../dao/OrganizacaoDao');

const organizacaoDao = new OrganizacaoDao();

class OrganizacaoController{
    
    cadastro(req, res){
        let organizacao = req.body;

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

module.exports = OrganizacaoController;