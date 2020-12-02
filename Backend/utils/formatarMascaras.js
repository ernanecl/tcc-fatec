function formatarMascaras(usuario){
    let formatar;
    if(usuario.cnpj){
        let cnpj = usuario.cnpj;
        formatar = cnpj.replace(/\./g,'').replace(/\//,'').replace(/-/,'');
        usuario.cnpj = formatar;
    }else if(usuario.cpf){
        let cpf = usuario.cpf;
        let rg = usuario.rg;
        formatar = cpf.replace(/\./g,'').replace(/-/,'');
        usuario.cpf = formatar;
        formatar = rg.replace(/\./g,'').replace(/-/,'');
        usuario.rg = formatar;
    }
    
    let cep = usuario.cep;
    let formatarCep = cep.replace(/-/,'');
    usuario.cep = formatarCep;
    let tel = usuario.fone;
    let formatarTel = tel.replace('(','').replace(')','').replace('-','');
    usuario.fone = formatarTel;
    return usuario;
}

module.exports = formatarMascaras;