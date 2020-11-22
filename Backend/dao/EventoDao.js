const conexao = require("../config/conexao");

class EventoDao {

  //buscando por nome
  listaPorNome(nome, callback) {
    const sql = `
            SELECT * FROM eventos
            WHERE lcase(nome = ${nome})
        `;

    conexao.query(sql, callback);
  }

  //buscando por data
  listaPorData(data, callback) {
    const sql = `
            SELECT * FROM eventos
            WHERE lcase(data = ${data})
        `;

    conexao.query(sql, callback);
  }

  //buscando por organizador
  listaPorOrganizador(organizador, callback) {
    const sql = `
            SELECT * FROM eventos
            WHERE lcase(organizador = ${organizador})
        `;

    conexao.query(sql, callback);
  }

  inserir(evento, callback){
    const sql = `
      INSERT INTO eventos(nome, organizador, data, imagem, hora, inscricao, ficha, tempo, descricao, categoria, visibilidade, termo)
      VALUES(?,?,?,?,?,?,?,?,?,?,?,?)
    `
    conexao.query(sql, callback);
  }
}

module.exports = EventoDao;
