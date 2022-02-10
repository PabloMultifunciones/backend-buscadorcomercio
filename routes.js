const express = require('express');
const route = express.Router();
const registerController = require('./controllers/registerController.js');
const loginController = require('./controllers/loginController.js');
const mainController = require('./controllers/mainController.js');

route.post('/addUser', registerController.addUser);

route.post('/addCommerce', mainController.addCommerce);

route.get('/search/:commerce', mainController.searchCommerce);

route.post('/existUser', loginController.existUser);

route.post('/saveOpinion', mainController.saveOpinion);

route.post('/existOpinion', mainController.existOpinion);

route.get('/getOpinions/:id_commerce', mainController.getOpinions);

route.get('/getLastThreeOpinions/:id_usuario', mainController.getLastThreeOpinions);

module.exports = route;