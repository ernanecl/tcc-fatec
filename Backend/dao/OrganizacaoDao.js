const conexao = require("../config/conexao");

class OrganizacaoDao {
  listarPorNome(nome, callback){
    const sql = `
      SELECT nome, end, bairro, cidade, cep, fone, email, cnpj
      FROM organizacoes
      WHERE lcase(nome LIKE '%${nome}%')
    `;

    conexao.query(sql, callback);
  }
  listarPorCnpj(cnpj, callback){
    const sql = `
      SELECT nome, end, bairro, cidade, cep, fone, email, cnpj
      FROM organizacoes
      WHERE cnpj = '${cnpj}'
    `;

    conexao.query(sql, callback);
  }
  inserir(organizacao, callback) {
    const sql = `
            INSERT INTO organizacoes(nome, end, bairro, cidade, cep, fone, email, cnpj, senha, finsLucrativos)
            VALUES (?,?,?,?,?,?,?,?,?,?)
        `;
    conexao.query(
      sql,
      [
        organizacao.nome,
        organizacao.end,
        organizacao.bairro,
        organizacao.cidade,
        organizacao.cep,
        organizacao.fone,
        organizacao.email,
        organizacao.cnpj,
        organizacao.senha,
        organizacao.finsLucrativos
      ],
      callback
    );
  }

  atualizar(email, valores, callback) {
    const sql = `
      UPDATE organizacoes SET ?
      WHERE email = ${JSON.stringify(email)}
    `;

    conexao.query(sql, valores, callback);
  }
}

module.exports = OrganizacaoDao;
