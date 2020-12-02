const conexao = require("../config/conexao");

class UsuarioDao {
  inserir(email, senha, identificacao, bit, callback) {
    const sql = `
            INSERT INTO usuarios(email, senha, identificacao, ehFuncionario)
            VALUES(?,?,?)
        `;
    conexao.query(sql, [email, senha, identificacao, bit], callback);
  }
  atualizar(email, valores, callback){
    const sql = `
      UPDATE usuarios SET ?
      WHERE email = ${JSON.stringify(email)}
    `
    conexao.query(sql, valores, callback);
  }
  buscarUsuario(email, senha, callback){
    const sql = `SELECT email, senha FROM usuarios WHERE email = '${email}' AND senha ='${senha}'`

    conexao.query(sql, callback);
  }
}

module.exports = UsuarioDao;
