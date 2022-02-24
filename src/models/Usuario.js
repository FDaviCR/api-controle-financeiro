const Sequelize = require("sequelize");
const connection = require("../database/index");
const Pessoa = require("./Pessoas");

const Usuario = connection.define('Usuarios',{
    login:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    usuario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ativo:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

Usuario.belongsTo(Pessoa);

Usuario.sync({force:false});

module.exports = Usuario;