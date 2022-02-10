const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db.js');

class Comercio extends Model{}
Comercio.init({
    id: {type: DataTypes.INTEGER, primaryKey: true},
    nombre: DataTypes.STRING,
    localidad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    rubro: DataTypes.STRING,
},{
    sequelize,
    modelName: 'comercio'
});

module.exports = Comercio;