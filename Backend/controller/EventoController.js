const EventosDao = require ('../dao/EventoDao');
const moment = require('moment')
const eventoDao = new EventoDao();

class EventoController{

    listaNome(req, res){
        const nome = req.params.nome;

        eventoDao.listaPorNome(nome, (erro, resultado) =>{
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

        //usando o moment para formatar a data recebida
        data = moment(data, "DD-MM-YYYY").format("YYYY-MM-DD");
        eventoDao.listaPorData(data, (erro, resultado)=>{
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

        eventoDao.listaPorOrganizador(organizador, (erro, resultado)=>{
            if(erro){
                console.log(erro);
                res.status(500).send("Ocorreu um erro");
            }else{
                console.log(resultado);
                res.status(200).json(resultado);
            }
        });
    }

    cadastro(req, res){
        const evento = req.body;

        eventoDao.inserir(evento, (erro)=>{
            if(erro){
                console.log(erro);
                res.send("Ocorreu um erro");
            }else{
                console.log("Evento cadastrado");
                res.status(201).send("Evento cadastrado com sucesso!");
            }
        });
    }
}

module.exports = EventoController;

