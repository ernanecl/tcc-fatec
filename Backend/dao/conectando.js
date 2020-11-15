const conexao = require('../config/conexao');
const Tabelas = require('./Tabelas');

function conectando(){

    conexao.connect((erro)=>{
        if(erro){
            console.log("Houve um erro " + erro);
        }else{
            console.log("Conectado ao banco");
            Tabelas.init(conexao);
        }
    })
}

module.exports = conectando();