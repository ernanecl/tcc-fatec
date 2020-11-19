const conexao = require ('../config/conexao');

class PessoaDao{

    inserir(pessoa, callback){
        const sql = `
            INSERT INTO pessoa(nome, end, bairro, cidade, cep, fone, email, rg, cpf, senha)
            VALUES(?,?,?,?,?,?,?,?,?,?)
        `


        

        conexao.query(sql, callback);
    }
}

module.exports = PessoaDao;