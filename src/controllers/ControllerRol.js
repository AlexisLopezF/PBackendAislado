const Rol = require('../models/Rol');

function pruebaRol(req,res){
    res.status(200).send({
        message: 'probando una acción, dentro de controlador Rol'
    });
}
////////////////////////////////////////////////////////////
//////////////////// CRUD Rol //////////////////////////
////////////////////////////////////////////////////////////

///// crear ///////
function saveRol(req,res){
    console.log("Dentro de funcion saveRol ruta /crearRol");
    var myRol= new Rol(req.body);
    myRol.save((err,result)=>{
    res.status(200).send({message:result});
    });
}

///// buscar ///////
function buscarData(req,res){
    console.log("Dentro de funcion buscarData ruta /buscarRol/:id");
    var idRol=req.params.id;
    Rol.findById(idRol).exec((err,result)=>{
    if(err){
        res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
    }else{
        if(!result){
            res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
        }else{
            res.status(200).send({result});
        }
    }
    });
}

function listarAllData(req,res){
    console.log("Dentro de funcion listarAllData ruta /buscarRolAll/:idb?");
    var idRol=req.params.idb;
    if(!idRol){
        var result=Rol.find({}).sort('nombre');
    }else{
        var result=Rol.find({_id:idRol}).sort('nombre');
    }
    result.exec(function(err,result){
    if(err){
        res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
    }else{
        if(!result){
            res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
        }else{
            res.status(200).send({result});
        }
    }
    })
}
 ///////////// Actualizar //////////////////
function updateRol(req,res){
    console.log("Dentro de funcion updateRol ruta /actualizarRol/:id");
    var id = mongoose.Types.ObjectId(req.query.productId);
    Rol.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, Rol) {
    if (err)
    res.send(err);
    res.json(Rol);
    });
    }

////////// Delete ////////////////
function deleteRol(req,res){
    console.log("Dentro de funcion deleteRol ruta /borrarRol/:id");
    var idRol=req.params.id;
    Rol.findByIdAndRemove(idRol, function(err, Rol){
    if(err) {
        return res.json(500, {
        message: 'No hemos encontrado la Rol'
        })
    }
        return res.json(Rol)
        });
}


//////////// Exportar funciones controlador Rol //////////
module.exports={
    pruebaRol,
    saveRol,
    buscarData,
    listarAllData,
    updateRol,
    deleteRol
}