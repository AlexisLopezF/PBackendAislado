var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var RolSchema=Schema({
    name:String,
    password:String,
    phone:String,
    email:String,
    account:String,
    addres:String,
    picture:String
    });

    const Rol = mongoose.model('Rol',RolSchema);
    module.exports = Rol;
