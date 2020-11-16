const conexao = require("../config/conexao");

class EventosDao {
  listaPorNome(nome, callback) {
    const sql = `
            SELECT * FROM eventos
            WHERE lcase(nome = ${nome})
        `;

    conexao.query(sql, callback);
  }

  listaPorData(data, callback) {
    const sql = `
            SELECT * FROM eventos
            WHERE lcase(data = ${data})
        `;

    conexao.query(sql, callback);
  }

  listaPorOrganizador(organizador, callback) {
    const sql = `
            SELECT * FROM eventos
            WHERE lcase(organizador = ${organizador})
        `;

    conexao.query(sql, callback);
  }
}

module.exports = EventosDao;
