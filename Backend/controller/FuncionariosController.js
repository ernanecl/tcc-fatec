const FuncionarioDao = require('../dao/FuncionarioDao');
const { validationResult } = require('express-validator')

const funcionarioDao = new FuncionarioDao();

class FuncionarioController{

    cadastro(req, res){
        const funcionario = req.body;

        const erros = validationResult(req);

        if(!erros.isEmpty()){
            console.log("Ocorreram erros na validação " + erros);
        }else{
            funcionarioDao.inserir(funcionario, (erro)=>{
                if(erro){
                    console.log(erro);
                }else{
                    console.log("Funcionário cadastrado!");
                    res.status(201).send("Funcionário cadastrado com sucesso");
                }
            });
        }
    }
}

module.exports = FuncionarioController;