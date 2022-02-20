const Sequelize = require('sequelize');

const connection = new Sequelize( 
    'ControleFinanceiro', 'root', '12345',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: "-03:00"
    }
);

try {
    connection.authenticate();
    console.log('Conexão estabelecida com sucesso!');
} catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
}

module.exports = connection;