const FuncionarioDao = require('../dao/FuncionarioDao');

const funcionarioDao = new FuncionarioDao();

class FuncionarioController{

    cadastro(req, res){
        const funcionario = req.body;

        funcionarioDao.inserir(funcionario, (erro)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Funcionário cadastrado!");
                res.status(201).send("Funcionário cadastrado com sucesso");
            }
        })
    }
}

module.exports = FuncionarioController;