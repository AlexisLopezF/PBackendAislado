var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//methodOverride = require("method-override");
mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({extended: true
}));
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-RequestedWith, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Rutas
app.use(require('./src/routers/routes'));

//Exportar
module.exports = app;   //visualizado desde cualquier parte del backend
