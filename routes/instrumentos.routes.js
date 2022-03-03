const express = require('express');     //Archivo para administrar diferentes rutas

const router = express.Router();

router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});

module.exports = router;
                        