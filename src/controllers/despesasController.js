const Despesas = require("../models/Despesa");

module.exports = {

    async cadastrarDespesa(request, response) {
        let descricao = request.descricao;
        let valor = request.valor;

        if(!isNan(valor)){
            Despesas.create({
                descricao: descricao,
                valor: valor
            }).then(()=>{
                return {res: true, descricao:"Despesa cadastrada com sucesso."};
            })
        }else{
            return {res: false, message:"O valor não é númerico."};
        }
    }
}