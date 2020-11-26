const UsuarioController = require('../controller/UsuarioController');
const usuarioController = new UsuarioController();
function alterarSenhaEmail(email, valores){
    if(valores.email || valores.senha){
        usuarioController.atualizar(email, valores);
    }
}