const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UsuarioDao = require("../dao/UsuarioDao");
passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "senha"
},
    (email, senha, done)=>{
        const usuarioDao = new UsuarioDao();
        const usuario = {
            email: email, 
            senha: senha
        }
        usuarioDao.buscarUsuario(email,senha, (erro, resultado)=>{
            if(erro){
                console.log(erro);
                return;
            }
            if(resultado.length != 0){
                return done(null, usuario);
            }else{
                return done(null, false, {messagem: 'Login e senha incorretos!'});
            }
        });
    }
));

passport.serializeUser((usuario, done=>{
    const usuarioSessao = {
        email: usuario.email, 
        senha: usuario.senha
    }
    done(null, usuarioSessao);
}));

passport.deserializeUser((usuarioSessao, done)=>{
    done(null, usuarioSessao);
});

export const autenticado = (req, res, next) =>{
    
}