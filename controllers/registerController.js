const md5 = require('md5');
const usuario_model = require('../database/models/Usuario.js');

function isValidName(name){
    if(name == '' || name.length < 5){
        return false;
    }
    return true;
}

function isValidPassword(password,passwordConfirm){
    if(password == passwordConfirm){
        if(password == '' || password.length < 5){
            return false;
        }
        return true;
    }else{
        return false;
    }
}

exports.addUser = (req,res) => {
    const name = req.body.name;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;
    if(isValidPassword(password,passwordConfirm) && isValidName(name)){
        usuario_model.create({
            name: name,
            password: md5(passwordConfirm)
        })
        .then((response) => {
	    res.json({id : response.null, name: response.dataValues.name, password: response.dataValues.password});
        });
    }else{
    	res.json({success : false});
    }
}