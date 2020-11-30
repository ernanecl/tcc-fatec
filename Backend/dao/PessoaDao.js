const conexao = require("../config/conexao");

class PessoasDao {
  listar(cpf, callback) {
    const sql = `
      SELECT nome, end, bairro, cidade, cep, fone, email
      FROM pessoas
      WHERE cpf = '${cpf}'
    `;
    conexao.query(sql, callback);
  }
  inserir(pessoa, callback) {
    const sql = `
            INSERT INTO pessoas(nome, rg, cpf, end, bairro, cidade, cep, fone, email, senha)
            VALUES(?,?,?,?,?,?,?,?,?,?)
        `;
    conexao.query(sql, [
      pessoa.nome, 
      pessoa.rg,
      pessoa.cpf,
      pessoa.end,
      pessoa.bairro, 
      pessoa.cidade,
      pessoa.cep,
      pessoa.fone, 
      pessoa.email,
      pessoa.senha
    ], callback);
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
