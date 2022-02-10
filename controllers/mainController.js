const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const comercio_model = require('../database/models/Comercio.js');
const opinion_model = require('../database/models/Opinion.js');

exports.addCommerce = (req,res) => {
    const nombre = req.body.nombre;
    const localidad  = req.body.localidad;
    const direccion = req.body.direccion;
    const numero = req.body.numero;
    const rubro = req.body.rubro;
    comercio_model.create({
        nombre: nombre,
        localidad: localidad,
        direccion: direccion,
        numero: numero,
 	rubro: rubro
    }).then(() => {
        res.json({success: true});
    });
}

exports.searchCommerce = (req,res) => {
    const commerce = req.params.commerce;
    comercio_model.findAll({
        where: {
            nombre: {
              [Op.like]: `%${commerce}%`
            }
        }
    })
    .then((result) => {
        res.send(result);
    });
}

exports.existOpinion = (req,res) => {
    const usuario_id = req.body.usuario_id;
    const comercio_id = req.body.comercio_id;
    opinion_model.findAll({
    	where: {
	    id_comercio : comercio_id,
	    id_usuario : usuario_id
	}
    })
    .then(result => {
    	if(result.length > 0){
	    res.json({success: true});
	}else{
	    res.json({success: false});
	}
     });
}

exports.saveOpinion = (req,res) => {
    const descripcion = req.body.descripcion;
    const id_commerce = req.body.id_commerce;
    const id_usuario = parseInt(req.body.id_usuario);
    opinion_model.create({
        id_comercio : id_commerce,
	id_usuario : id_usuario,
	descripcion: descripcion
    }).then(() => {
        res.json({success: true});
    }).catch(error => {
	throw error;
    });
}



exports.getOpinions = (req,res) => {
    const id_commerce = req.params.id_commerce;
    opinion_model.findAll({
    	where: {
	    id_comercio : id_commerce
	}
    })
    .then(result => {
    	res.json(result);    
    })
    .catch(error => {
	throw error;
    });
}

exports.getLastThreeOpinions = (req,res) => {
    const id_usuario = req.params.id_usuario;
    opinion_model.findAll({
	limit: 3,
    	where: {
	    id_usuario : id_usuario 
	}
    })
    .then(result => {
    	res.json(result);    
    })
    .catch(error => {
	throw error;
    });
}