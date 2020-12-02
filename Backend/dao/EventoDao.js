const conexao = require("../config/conexao");

class EventoDao {
  //buscando por nome
  listaPorNome(nome, callback) {
    const sql = `
            SELECT cod, nome, organizador, categoria, data, hora, ficha, duracao, descricao FROM eventos
            WHERE lcase(nome LIKE '%${nome}%')
        `;

    conexao.query(sql, callback);
  }

  //buscando por data
  listaPorData(data, callback) {
    console.log(data);
    const sql = `
            SELECT * FROM eventos
            WHERE data = '${data}'
        `;
  
    conexao.query(sql, callback);
  }

  //buscando por organizador
  listaPorOrganizador(organizador, callback) {
    const sql = `
            SELECT  cod, nome, organizador, categoria, data, hora, ficha, duracao, descricao FROM eventos
            WHERE lcase(organizador LIKE '%${organizador}%')
        `;

    conexao.query(sql, callback);
  }

  inserir(evento, callback) {
    const sql = `
      INSERT INTO eventos(nome, organizador, data, imagem, hora, inscricao, ficha, duracao, descricao, categoria, visibilidade, termo)
      VALUES(?,?,?,?,?,?,?,?,?,?,?,?)
    `;
    conexao.query(
      sql,
      [
        evento.nome,
        evento.organizador,
        evento.data,
        evento.imagem,
        evento.hora,
        evento.inscricao,
        evento.ficha,
        evento.duracao,
        evento.descricao,
        evento.categoria,
        evento.visibilidade,
        evento.termo,
      ],
      callback
    );
  }

  atualizar(nomeEvento, organizador, valores, callback) {
    const sql = `
      UPDATE eventos SET ? 
      WHERE lcase(nome LIKE '%${(nomeEvento)}%') AND lcase(organizador = '${organizador}')
    `;

    conexao.query(sql, valores, callback);
  }
}

module.exports = EventoDao;
