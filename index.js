var app = require('./app');
var port = 4000;
var mongoose =require('./src/conexDB/conn');

app.listen(port, () =>{
console.log("servidor corriendo ok")
});
