class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarFuncionarios();
    this.criarPessoa();
    this.criarOrganizacao();
    this.criarContato();
    this.criarEvento();
    this.criarInscricao();
  }

  //Os campos com mascara serão salvos no banco com mascara?
  criarFuncionarios(){
    const sql = `
            CREATE TABLE IF NOT EXISTS funcionarios( 
                nome VARCHAR(200) NOT NULL,
                rg VARCHAR(9) NOT NULL, 
                cpf VARCHAR(11) NOT NULL, 
                cargo VARCHAR(100) NOT NULL, 
                end VARCHAR(150) NOT NULL, 
                bairro VARCHAR(100) NOT NULL, 
                cidade VARCHAR(100) NOT NULL, 
                cep VARCHAR(8) NOT NULL, 
                fone VARCHAR(11) NOT NULL, 
                email VARCHAR(200) NOT NULL, 
                senha VARCHAR(30) NOT NULL,
                PRIMARY KEY(cpf)
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
  criarPessoa() {
    const sql = `
            CREATE TABLE IF NOT EXISTS pessoa(
                nome VARCHAR(200) NOT NULL,
                end VARCHAR(150) NOT NULL,
                bairro VARCHAR(100) NOT NULL, 
                cidade VARCHAR(100) NOT NULL, 
                cep VARCHAR(8) NOT NULL, 
                fone VARCHAR(11) NOT NULL, 
                email VARCHAR(200) NOT NULL, 
                rgPf VARCHAR(9) NOT NULL, 
                cpf VARCHAR(11) NOT NULL,
                senha VARCHAR(30) NOT NULL, 
                PRIMARY KEY (cpf)
            )
        `;

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log("Houve um erro " + erro);
      } else {
        console.log("Tabela pessoa criada!");
      }
    });
  }

  criarOrganizacao(){
      const sql = `
        CREATE TABLE IF NOT EXISTS organizacao(
                nome VARCHAR(200) NOT NULL,
                end VARCHAR(150) NOT NULL,
                bairro VARCHAR(100) NOT NULL, 
                cidade VARCHAR(100) NOT NULL, 
                cep VARCHAR(8) NOT NULL,                
                fone VARCHAR(11) NOT NULL, 
                email VARCHAR(200) NOT NULL, 
                cnpj VARCHAR(14) NOT NULL,
                senha VARCHAR(30) NOT NULL, 
                finsLucrativos VARCHAR(3) NOT NULL,
                PRIMARY KEY (cnpj)
        )
      `
      this.conexao.query(sql, (erro) =>{
        if(erro){
            console.log("Houve um erro " + erro);
        }else{
            console.log("Tabela organização criada!");
        }
      });
  }

  criarContato(){
      const sql = `
        CREATE TABLE IF NOT EXISTS contato(
            cod INT AUTO_INCREMENT NOT NULL, 
            nome VARCHAR(200) NOT NULL, 
            email VARCHAR(200) NOT NULL, 
            tel VARCHAR(11) NOT NULL, 
            msg text NOT NULL, 
            PRIMARY KEY(cod)
        )
      `

      this.conexao.query(sql, (erro)=>{
        if(erro){
            console.log("Houve um erro " + erro);
        }else{
            console.log("Tabela contato criada!");
        }
      });
  }

  //O que seria o campo termo? 
  criarEvento(){
      const sql = `
      CREATE TABLE IF NOT EXISTS eventos(
        cod INT AUTO_INCREMENT NOT NULL, 
        nome VARCHAR(200) NOT NULL,
        organizador VARCHAR(200) NOT NULL,  
        data DATE NOT NULL,
        imagem LONGBLOB, 
        hora VARCHAR(4) NOT NULL, 
        inscricao VARCHAR(3) NOT NULL,  
        ficha text NOT NULL, 
        tempo VARCHAR(10) NOT NULL, 
        descricao text NOT NULL, 
        categoria VARCHAR(200) NOT NULL, 
        visibilidade VARCHAR(100) NOT NULL,
        termo LONGBLOB,
        PRIMARY KEY(cod)
    )
      `
      this.conexao.query(sql, (erro)=>{
        if(erro){
            console.log("Houve um erro " + erro);
        }else{
            console.log("Tabela evento criada!");
        }
      }); 
  }

  criarInscricao(){
    const sql = `
      CREATE TABLE IF NOT EXISTS inscricao(
        cod INT AUTO_INCREMENT NOT NULL, 
        nome VARCHAR(50) NOT NULL, 
        nomeEvento VARCHAR(200) NOT NULL, 
        qtd INT NOT NULL, 
        preco DECIMAL(6,2) NOT NULL, 
        dataInicio DATE NOT NULL, 
        dataFinal DATE NOT NULL, 
        disponibilidade NOT NULL, 
        descricao NOT NULL, 
        PRIMARY KEY (cod),
        FOREIGN (nomeEvento) REFERENCES eventos(nome)
      )
    `
  }

}

module.exports = new Tabelas;
