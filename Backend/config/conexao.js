const mysql = require ('mysql');

function criandoConexao(){
    const conexao = mysql.createConnection({
        host: "localhost",
        port: 3306, 
        user: "root",
        password: "root",
        database: "centro_cultural"
    });

    return conexao;
}

module.exports = criandoConexao();