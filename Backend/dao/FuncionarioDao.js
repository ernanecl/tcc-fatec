const conexao = require("../config/conexao");

class FuncionarioDao {
  listarPorEmail(email, callback) {
    const sql = `
      SELECT nome, rg, cpf, cargo, end, bairro, cidade, cep, fone, email
      FROM funcionarios
      WHERE email = '${email}'
    `;
    conexao.query(sql, callback);
  }
  listarPorNome(nome, callback) {
    const sql = `
      SELECT nome, rg, cpf, cargo, end, bairro, cidade, cep, fone, email
      FROM funcionarios
      WHERE lcase(nome LIKE '%${nome}%')
    `;
    conexao.query(sql, callback);
  }
  listarPorCpf(cpf, callback) {
    const sql = `
      SELECT nome, rg, cpf, cargo, end, bairro, cidade, cep, fone, email
      FROM funcionarios
      WHERE cpf = '${cpf}'
    `;
    conexao.query(sql, callback);
  }
  listarPorNome(cargo, callback) {
    const sql = `
      SELECT nome, rg, cpf, cargo, end, bairro, cidade, cep, fone, email
      FROM funcionarios
      WHERE lcase(cargo LIKE '%${cargo}%')
    `;
    conexao.query(sql, callback);
  }
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
            UPDATE funcionarios SET ?
            WHERE email = ${JSON.stringify(email)}
        `;

    conexao.query(sql, valores, callback);
  }

  deletarPorRG(rg, callback) {
    const sql = `
            DELETE funcionarios
            WHERE rg = '${rg}'
        `;

    conexao.query(sql, callback);
  }
  deletarPorCpf(cpf, callback) {
    const sql = `
            DELETE funcionarios
            WHERE cpf = '${cpf}'
        `;

    conexao.query(sql, callback);
  }
}

module.exports = FuncionarioDao;
