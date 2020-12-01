//função para verificar se alguma linha foi afetada com a exclusão ou não
//Isso é para o caso de estar tentando excluir algo que não existe
function verificarExclusao(res, linhaAfetada){
    if(linhaAfetada ==0){
        console.log("Não encontrado!");
        res.status(404).send('Não encontrado, nada foi excluído!');
    }else{
        return true;
    }
}

module.exports = verificarExclusao;