const Sequelize = require("sequelize");
const connection = require("../database/index");

const Pessoa = connection.define('Pessoas',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento:{
        type: Sequelize.DATE,
        allowNull: false
    }
})

Pessoa.sync({force:false});

module.exports = Pessoa;