//const Sequelize = require('sequelize');
const usuario_model = require('../database/models/Usuario.js')
const md5 = require('md5');

exports.existUser = (req,res) => {
    const name = req.body.name;
    const password = req.body.password;
    //const name = req.params.name
    //const password = req.params.password;
    usuario_model.findAll({
        where : {
            name : name,
            password : md5(password)
        }
    })
    .then(result => {
	//console.log(result[0].dataValues);
        (result.length > 0) ? res.json(result[0].dataValues) : res.json({success : false});
    });
}