const conexao = require('../config/conexao');

class InscricaoDao{
    inserir(inscricao, callback){
        const sql = `
            INSERT INTO inscricoes (nomeEvento, qtd, preco, dataInicio, dataFinal, horaInicio, horaFinal, disponibilidade, descricao)
            VALUES(?,?,?,?,?,?,?,?,?)
        `

        conexao.query(sql, [
            inscricao.nomeEvento, 
            inscricao.qtd, 
            inscricao.preco, 
            inscricao.dataInicio, 
            inscricao.dataFinal, 
            inscricao.horaInicio, 
            inscricao.horaFinal, 
            inscricao.disponibilidade, 
            inscricao.descricao
        ], callback);
    }
}

module.exports = InscricaoDao;