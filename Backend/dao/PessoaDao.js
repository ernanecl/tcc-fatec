const conexao = require("../config/conexao");

class PessoasDao {
  inserir(pessoa, callback) {
    const sql = `
            INSERT INTO pessoas(nome, rg, cpf, end, bairro, cidade, cep, fone, email, senha)
            VALUES(?,?,?,?,?,?,?,?,?,?)
        `;
    conexao.query(sql, callback);
  }

  atualizar(email, valores, callback) {
    const sql = `
      UPDATE pessoas SET ?
      WHERE email = ${JSON.stringify(email)}
    `;
    conexao.query(sql, valores, callback);
  }
}

module.exports = PessoasDao;
