
function verificandoAlteracao(resultado, res){

    //verificando se após a alteração houve alguma mudança
    if(resultado.changedRows == 0){
        console.log("Não foi possivel alterar");
        res.status(404).send("Não foi possivel alterar");
    }else{
        console.log("Alterado com sucesso!");
        res.status(200).send("Alterado com sucesso!");
    }
}

module.exports = verificandoAlteracao();