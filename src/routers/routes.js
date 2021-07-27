const { Router } = require('express');

var ControllerRol=require('../controllers/ControllerRol');
var ControllerTransaction=require('../controllers/ControllerTransaction');

const router = Router();

router.get('/pruebaRol',ControllerRol.pruebaRol);
router.get('/pruebaTransaction',ControllerTransaction.pruebaTransaction);

router.post('/crearRol',ControllerRol.saveRol);
router.post('/crearTransaction',ControllerTransaction.saveTransaction);


router.get('/buscarRol/:id',ControllerRol.buscarData);
router.get('/buscarRolAll/:idb?',ControllerRol.listarAllData);
router.get('/buscarTransaction/:id',ControllerTransaction.buscarData);
router.get('/buscarTransactionAll/:idb?',ControllerTransaction.listarAllData);



router.put('/actualizarRol/:id',ControllerRol.updateRol);
router.put('/actualizarTransaction/:id',ControllerTransaction.updateTransaction);

router.delete('/borrarRol/:id',ControllerRol.deleteRol);
router.delete('/borrarTransaction/:id',ControllerTransaction.deleteTransaction);

module.exports = router;
