const express = require('express');     //Archivo para administrar diferentes rutas

const router = express.Router();

const instrumentos_array = ["Guitarra", "Piano", "Saxofón"];

router.get('/instrumentos', (request, response, next) => {
    //response.sendFile(path.join(__dirname, '..', 'views', 'Lab12.html')); Para enviar un archivo HTML
    response.render('lista', {instrumentos_array});
});

router.get('/nuevo', (request, response, next) => {
    response.render('nuevo');   // se envía el archivo "nuevo.ejs"
});

router.post('/nuevo', (request, response, next) => {
    instrumentos_array.push(request.body.nombre);
    response.redirect('/instrumentos');
});

router.get('/', (request, response, next) => {
    let respuesta = ('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>Instrumentos</title></head><body><h1 id="principal">Este sitio es de instrumentos musicales</h1><ul>');
    for (let i in instrumentos_array) {
    respuesta += '<li>' + instrumentos_array[i] + '</li>';
    }
    respuesta += '</ul><br><br><a href="instrumentos">Ver instrumentos</a><br><br></body></html>';
    response.send(respuesta);
});

router.use('/', (request, response, next) => {
    response.statusCode = 404;
    let respuesta = ('<!DOCTYPE html><html><head><title>Instrumentos | Not Found</title></head><body><h1 id="404">Este sitio no existe, amigo.</h1></body>');
    response.send(respuesta);
})



module.exports = router;
                        