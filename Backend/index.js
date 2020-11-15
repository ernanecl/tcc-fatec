const app = require('./config/custom-express');
const conectando = require('./dao/conectando');

//subindo o servidor
app.listen(3000, ()=>console.log("Servidor ouvindo na porta 3000"));
