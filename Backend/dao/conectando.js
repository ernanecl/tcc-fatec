const conexao = require('../config/conexao');

function conectando(){
    
    conexao.connect((erro)=>{
        if(erro){
            console.log("Houve um erro " + erro);
        }else{
            console.log("Conectado ao banco");
        }
    })
}

module.exports = conectando();