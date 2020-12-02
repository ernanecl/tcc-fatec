const UsuarioDao = require("../dao/UsuarioDao");
const usuarioDao = new UsuarioDao();

class UsuarioController {
  inserirUsuario(email, senha, string) {
    if(string.toUpperCase() == 'NÃO'){
      
    }
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
