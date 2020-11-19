const conexao = require('../config/conexao');

class OrganizacoesDao{

    inserir(organizacao, callback){
        const sql = `
            INSERT INTO organizacoes()
            VALUES ()
        `

        conexao.query(sql, [], callback);
    }
}