const FuncionarioDao = require('../dao/FuncionarioDao');
const { validationResult } = require('express-validator');
const UsuarioDao = require('../dao/UsuarioDao');

const funcionarioDao = new FuncionarioDao();
const usuarioDao = new UsuarioDao();

class FuncionarioController{

    cadastro(req, res){
        const funcionario = req.body;

        const erros = validationResult(req);

        //verificando se houve erro de validação
        if(!erros.isEmpty()){
            console.log("Ocorreram erros na validação " + erros);
        }else{

            //inserindo o funcionário na tabela usuário 
            usuarioDao.inserir(funcionario.email, funcionario.senha,'SIM', (erro)=>{
                if(erro){
                    console.log(erro);
                }else{
                    console.log("Usuario inserido");

                    //inserindo o funcionário na tabela de funcionários
                    funcionarioDao.inserir(funcionario, (erro)=>{
                        if(erro){
                            console.log(erro);
                        }else{
                            console.log("Funcionário cadastrado!");
                            res.status(201).send("Funcionário cadastrado com sucesso");
                        }
                    });
                }
            })
        }
    }
}

module.exports = FuncionarioController;