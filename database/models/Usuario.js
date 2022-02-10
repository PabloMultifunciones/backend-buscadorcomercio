const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db.js');

class Usuario extends Model{}
Usuario.init({
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: DataTypes.STRING,
    password: DataTypes.STRING
},{
    sequelize,
    modelName: 'usuario'
});

module.exports = Usuario;