const UsuarioDao = require("../dao/UsuarioDao");
const usuarioDao = new UsuarioDao();

class UsuarioController {
  inserirUsuario(email, senha, identificacao, string, tipo) {
    let continua = 0;
    do{
      if(identificacao == 11){
        tipo.listarPorCpf(identificacao, (erro, resultado) =>{
          if(erro){
            console.log(erro);
            return;
          }
          if(resultado.length != 0){
            continua = 1;
          }
        });
      }else{
        tipo.listarPorCnpj(identificacao, (erro, resultado) =>{
          if(erro){
            console.log(erro);
            return;
          }
          if(resultado.length != 0){
            continua = 1;
          }
        });
      }
    } while(continua !=1);
      
    usuarioDao.inserir(email, senha, string, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Usuário inserido com sucesso!");
      }
    });
  }
  atualizar(email, valores){
    usuarioDao.atualizar(email, valores, (erro)=>{
      if(erro){
        console.log(erro);
      }else{
        console.log("Usuário atualizado com sucesso!");
      }
    });
  }
}

module.exports = UsuarioController;
