const Sequelize = require('sequelize');

const connection = new Sequelize(
    
    'database', 'username', 'password',
    {
        host: 'localhost',
        dialect: 'mssql',
        timezone: "-03:00"
    }
    
);

module.exports = connection;