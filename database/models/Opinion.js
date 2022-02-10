const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db.js');

class Opinion extends Model{}
Opinion.init({
    id: {type: DataTypes.INTEGER, primaryKey: true},
    id_comercio: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    descripcion: DataTypes.STRING
},{
    sequelize,
    modelName: 'opinion'
});

module.exports = Opinion;