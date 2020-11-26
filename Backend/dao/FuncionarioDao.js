const conexao = require("../config/conexao");

class FuncionarioDao {
  inserir(funcionario, callback) {
    const sql = `
            INSERT INTO funcionarios(nome, rg, cpf, cargo, end, bairro, cidade, cep, fone, email, senha)
            VALUES(?,?,?,?,?,?,?,?,?,?,?)
        `;
    conexao.query(
      sql,
      [
        funcionario.nome,
        funcionario.rg,
        funcionario.cpf,
        funcionario.cargo,
        funcionario.end,
        funcionario.bairro,
        funcionario.cidade,
        funcionario.cep,
        funcionario.fone,
        funcionario.email,
        funcionario.senha,
      ],
      callback
    );
  }

  atualizar(email, valores, callback) {
    const sql = `
            UPDATE pessoas SET ?
            WHERE email = ${JSON.stringify(email)}
        `;

    conexao.query(sql, valores, callback);
  }
}

module.exports = FuncionarioDao;
