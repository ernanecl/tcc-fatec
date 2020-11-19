const conexao = require("../config/conexao");

class PessoasDao {
  inserir(pessoa, callback) {
    const sql = `
            INSERT INTO pessoas(nome, rg, cpf, end, bairro, cidade, cep, fone, email, senha)
            VALUES(?,?,?,?,?,?,?,?,?,?)
        `;
    conexao.query(sql, callback);
  }
}

module.exports = PessoasDao;
