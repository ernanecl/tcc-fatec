const conexao = require("../config/conexao");

class InscricaoDao {
  inserir(inscricao, callback) {
    const sql = `
            INSERT INTO inscricoes (nomeEvento, qtd, preco, dataInicio, dataFinal, horaInicio, horaFinal, disponibilidade, descricao)
            VALUES(?,?,?,?,?,?,?,?,?)
        `;

    conexao.query(
      sql,
      [
        inscricao.nomeEvento,
        inscricao.qtd,
        inscricao.preco,
        inscricao.dataInicio,
        inscricao.dataFinal,
        inscricao.horaInicio,
        inscricao.horaFinal,
        inscricao.disponibilidade,
        inscricao.descricao,
      ],
      callback
    );
  }

  listar(nomeEvento, callback){
    const sql = `SELECT * FROM inscricoes WHERE lcase(nomeEvento LIKE '%${nomeEvento}%')`

    conexao.query(sql, callback);
  }
  atualizar(nome, valores, callback) {
    const sql = `
            UPDATE inscricoes SET ?
            WHERE lcase(nomeEvento = ${JSON.stringify(nome)})
        `;
    conexao.query(sql, valores, callback);
  }
}

module.exports = InscricaoDao;
