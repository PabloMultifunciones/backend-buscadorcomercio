const express = require('express');
const app = express();
const routes = require('./routes.js');
const sequelize = require('./database/db.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.use(express.urlencoded({extended:false}));
app.set('port',3001);
app.use(routes);


app.listen(app.get('port'),() => {
    console.log(`Server iniciado: http://localhost:${app.get('port')}`);
    sequelize.authenticate()
    .then(() => {
        console.log('Nos hemos conectado a la base de datos');
    }).catch((error) => {
        console.log(error);
    })
});