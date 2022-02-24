const Sequelize = require("sequelize");
const connection = require("../database/index");

const Despesa = connection.define('Despesas',{
    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    valor:{
        type: Sequelize.DECIMAL,
        allowNull: false
    }
})

Despesa.sync({force:false});

module.exports = Despesa;