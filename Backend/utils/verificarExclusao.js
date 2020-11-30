function verificarExclusao(res, linhaAfetada){
    if(linhaAfetada ==0){
        console.log("Não encontrado!");
        res.status(404).send('Não encontrado, nada foi excluído!');
    }else{
        return true;
    }
}

module.exports = verificarExclusao;