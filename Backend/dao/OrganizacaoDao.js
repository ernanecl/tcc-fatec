const conexao = require("../config/conexao");

class OrganizacaoDao {
  inserir(organizacao, callback) {
    const sql = `
            INSERT INTO organizacoes(nome, end, bairro, cidade, cep, fone, email, cnpj, senha)
            VALUES (?,?,?,?,?,?,?,?,?)
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
      ],
      callback
    );
  }
}

module.exports = OrganizacaoDao;