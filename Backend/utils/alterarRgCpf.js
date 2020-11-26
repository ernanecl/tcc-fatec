
function alterarRgCpf(valores, res){
    if(valores.rg || valores.cpf || valores.cnpj){
        console.log('RG e CPF/CNPJ não podem alterados');
        res.status(400).send("RG e CPF/CNPJ não podem alterados");
        return true;
    }else{
        return false;
    }
}

module.exports = alterarRgCpf;