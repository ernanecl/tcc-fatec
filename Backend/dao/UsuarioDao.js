const conexao = require("../config/conexao");

class UsuarioDao {
  inserir(email, senha, string, callback) {
    const sql = `
            INSERT INTO usuarios(email, senha, ehFuncionario)
            VALUES(?,?,?)
        `;
    conexao.query(sql, [email, senha, string], callback);
  }
  atualizar(email, valores, callback){
    const sql = `
      UPDATE usuarios SET ?
      WHERE email = ${JSON.stringify(email)}
    `
    conexao.query(sql, valores, callback);
  }
}

module.exports = UsuarioDao;
