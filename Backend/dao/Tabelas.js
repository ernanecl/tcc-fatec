class Tabelas {
  constructor(conexao) {
    this.conexao = conexao;
  }

  //Os campos com mascara serão salvos no banco com mascara?
  criarFuncionarios() {
    const sql = `
            CREATE TABLE IF NOT EXISTS funcionarios( 
                nomeFunc VARCHAR(200) NOT NULL,
                rgFunc VARCHAR(9) NOT NULL, 
                cpfFunc VARCHAR(11) NOT NULL, 
                cargoFunc VARCHAR(100) NOT NULL, 
                endFunc VARCHAR(150) NOT NULL, 
                bairroFunc VARCHAR(100) NOT NULL, 
                cidadeFunc VARCHAR(100) NOT NULL, 
                cepFunc VARCHAR(8) NOT NULL, 
                foneFunc VARCHAR(11) NOT NULL, 
                emailFunc VARCHAR(200) NOT NULL, 
                senhaFunc VARCHAR(30) NOT NULL
                PRIMARY KEY(cpfFunc)
            )
        `;
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log("Houve um erro " + erro);
      } else {
        console.log("Tabela funcionários foi criada!");
      }
    });
  }
  criarPessoaFisica() {
    const sql = `
            CREATE TABLE IF NOT EXISTS pessoa_fisica(
                nomePf VARCHAR(200) NOT NULL,
                endPf VARHCAR(150) NOT NULL,
                bairroPf VARCHAR(100) NOT NULL, 
                cidadePf VARCHAR(100) NOT NULL, 
                cepPf VARCHAR(8) NOT NULL, 
                fonePf VARCHAR(11) NOT NULL, 
                emailPf VARCHAR(200) NOT NUL, 
                rgPf VARCHAR(9) NOT NULL, 
                cpfPf VARCHAR(11) NOT NULL,
                senhaPf VARCHAR(30) NOT NULL, 
                PRIMARY KEY (cpfPf)
            )
        `;

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log("Houve um erro " + erro);
      } else {
        console.log("Tabela pessoa física foi criada!");
      }
    });
  }

  criarPessoaJuridica(){
      const sql = `
        CREATE TABLE IF NOT EXISTS pessoa_juridica(
                nomePj VARCHAR(200) NOT NULL,
                endPj VARHCAR(150) NOT NULL,
                bairroPj VARCHAR(100) NOT NULL, 
                cidadePj VARCHAR(100) NOT NULL, 
                cepPj VARCHAR(8) NOT NULL, 
                fonePj VARCHAR(11) NOT NULL, 
                emailPj VARCHAR(200) NOT NUL, 
                cnpjPj VARCHAR(14) NOT NULL,
                senhaPj VARCHAR(30) NOT NULL, 
                finsLucrativos VARCHAR(3) NOT NULL,
                PRIMARY KEY (cnpjPf)
        )
      `
  }
}
