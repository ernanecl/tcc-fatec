const conexao = require("../config/conexao");

class UsuarioDao {
  inserir(email, senha, string, callback) {
    const sql = `
            INSERT INTO usuarios(email, senha, ehFuncionario)
            VALUES(?,?,?)
        `;
    conexao.query(sql, [email, senha, string], callback);
  }
}

module.exports = UsuarioDao;
