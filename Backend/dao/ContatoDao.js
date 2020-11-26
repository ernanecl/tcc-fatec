const conexao = require("../config/conexao");

class ContatoDao {
  inserir(contato, callback) {
    const sql = `
            INSERTO INTO contato(nome, email, tel, msg)
            VALUES (?,?,?,?)
        `;

    conexao.query(
      sql,
      [contato.nome, contato.email, contato.tel, contato.msg],
      callback
    );
  }
}

module.exports = ContatoDao;
