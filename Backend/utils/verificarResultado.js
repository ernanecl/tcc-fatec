function verificarResultado(resultado, res){
    if(resultado.length != 0){
        console.log("Busca realizada com sucesso!");
        res.status(200).json(resultado);
    }else{
        console.log("Dados não encontrados!");
        res.status(404).send("Dados não encontrados!");
    }
}

module.exports = verificarResultado;