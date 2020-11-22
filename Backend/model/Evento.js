class Evento{
    rotas(){
        return{
            cadastro: '/eventos/cadastro',
            consultaNome: '/eventos/nome_evento/:nome',
            consultaData: '/eventos/data/:data',
            consultaOrganizador: '/eventos/organizador/:organizador'
        }
    }
}

module.exports = Evento;