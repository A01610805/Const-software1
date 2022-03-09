const express = require('express');     //Archivo para administrar diferentes rutas
const router = express.Router();

const instrumentosController = require('../controllers/instrumentos_controller');

router.get('/instrumentos', instrumentosController.listaInst);
router.get('/nuevo', instrumentosController.get_nuevo);
router.post('/nuevo', instrumentosController.post_nuevo);
router.get('/', instrumentosController.inicio);
router.use('/', instrumentosController.error);

module.exports = router;
                        