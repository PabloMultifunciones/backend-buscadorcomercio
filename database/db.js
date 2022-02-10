const Sequelize = require('sequelize');
const { database } = require('../config.js');

const sequelize = new Sequelize(
    'buscadorcomercios', 
    'root',
    database.password,
    {
        host: database.localhost,
        dialect: 'mysql'
    }
);

module.exports = sequelize;