const conexao = require("../config/conexao");

class UsuarioDao {
  inserir(email, senha, identificacao, string, callback) {
    const sql = `
            INSERT INTO usuarios(email, senha, identificacao, ehFuncionario)
            VALUES(?,?,?)
        `;
    conexao.query(sql, [email, senha, identificacao, string], callback);
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
