const UsuarioDao = require("../dao/UsuarioDao");
const usuarioDao = new UsuarioDao();

class UsuarioController {
  inserirUsuario(email, senha, identificacao, string) {
      
    usuarioDao.inserir(email, senha, identificacao, string, (erro) => {
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
