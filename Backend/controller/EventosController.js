const EventosDao = require ('../dao/EventosDao');
const moment = require('moment')
const eventosDao = new EventosDao();

class EventosController{

    listaNome(req, res){
        const nome = req.params.nome;

        eventosDao.listaPorNome(nome, (erro, resultado) =>{
            if(erro){
                console.log(erro);
                res.status(500).send("Ocorreu um erro");
            }else{
                console.log(resultado);
                res.status(200).json(resultado);
            }
        });
    }

    listaData(req, res){
        const data = req.params.data;

        data = moment(data, "DD-MM-YYYY").format("YYYY-MM-DD");
        eventosDao.listaPorData(data, (erro, resultado)=>{
            if(erro){
                console.log(erro);
                res.status(500).send("Ocorreu um erro");
            }else{
                console.log(resultado);
                res.status(200).json(resultado);
            }
        });
    }
    listaOrganizador(req, res){
        const organizador = req.params.organizador;

        eventosDao.listaPorOrganizador(organizador, (erro, resultado)=>{
            if(erro){
                console.log(erro);
                res.status(500).send("Ocorreu um erro");
            }else{
                console.log(resultado);
                res.status(200).json(resultado);
            }
        });
    }
}

module.exports = EventosController;

