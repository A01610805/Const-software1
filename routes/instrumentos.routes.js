const express = require('express');     //Archivo para administrar diferentes rutas
const router = express.Router();
const isAuth = require('../util/is-auth.js');

const instrumentosController = require('../controllers/instrumentos_controller');

router.get('/instrumentos', instrumentosController.listaInst);
router.get('/nuevo', instrumentosController.get_nuevo);
router.post('/nuevo', instrumentosController.post_nuevo);
router.get('/', isAuth, instrumentosController.inicio);
router.get('/:ID_instrumento', isAuth, instrumentosController.filtrar);   // Para filtrar los instrumentos
router.get('/instrumentos/busqueda/:valor', isAuth, instrumentosController.buscar);
router.use('/', isAuth, instrumentosController.error);

module.exports = router;
                        