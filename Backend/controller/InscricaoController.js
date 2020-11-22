const InscricaoDao = require ('../dao/InscricaoDao');
const moment = require('moment');
const { validationResult } = require('express-validator');

const inscricaoDao = new InscricaoDao();

class InscricaoController{
    cadastro(req, res){
        const inscricao = req.body;
        inscricao.dataInicio = moment(inscricao.dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD');
        inscricao.dataFinal = moment(inscricao.dataFinal, 'DD/MM/YYYY').format('YYYY-MM-DD');

        let erros = validationResult(req);

        if(!erros.isEmpty()){
            console.log(erros);
            res.send("Erros de validação " + erros);
        }else{
            inscricaoDao.inserir(inscricao, (erro)=>{
                if(erro){
                    console.log(erro);
                    res.send("Ocorreu um erro");
                }else{
                    console.log("Inscrição cadastrado!");
                    res.status(201).send("Cadastrado com sucesso!");
                }
            });
        }

        
    }
}

module.exports = InscricaoController;