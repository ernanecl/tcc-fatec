const UsuarioDao = require('../dao/UsuarioDao');
const usuarioDao = new UsuarioDao();

class UsuarioController {

    inserirUsuario(email, senha, string){
    usuarioDao.inserir(email, senha, string, (erro, resultado) => {
        if(erro){
            console.log(erro);
        }else{
            console.log("Usuário inserido com sucesso!");
        }
    });
    }
}

module.exports = UsuarioController;