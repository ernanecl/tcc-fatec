const conexao = require("../config/conexao");

class EventosDao {

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
}

module.exports = EventosDao;
