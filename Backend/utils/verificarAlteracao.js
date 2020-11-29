function verificarAlteracao(res, alteracao) {
  //verificando se após a alteração houve alguma mudança
  if (alteracao == 0) {
    console.log("Não foi possivel alterar");
    res.status(404).send("Não foi possivel alterar");
  } else {
    return true;
  }
}

module.exports = verificarAlteracao;
