const express = require('express');     //Archivo para administrar diferentes rutas

const router = express.Router();

const instrumentos_array = ["Guitarra", "Piano", "Saxofón"];



router.get('/nuevo', (request, response, next) => {
    let respuesta = ('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>Nuevo Instrumento</title></head><body><h1 id="guitarras">Este sitio es para ingresar nuevos instrumentos</h1><form action="nuevo" method="POST" <label for=nombre">Nombre del instrumento: </label><input type="text" id="nombre" name="nombre" placeholder="Violín"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/">Regresar a la lista de instrumentos</a></body>');
    response.send(respuesta); 
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    instrumentos_array.push(request.body.nombre);
    response.redirect('/');
});

router.get('/', (request, response, next) => {
    let respuesta = ('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>Instrumentos</title></head><body><h1 id="principal">Este sitio es de instrumentos musicales</h1><ul>');
    for (let i in instrumentos_array) {
    respuesta += '<li>' + instrumentos_array[i] + '</li>';
    }
    respuesta += '</ul><br><br><a href="nuevo">Agregar un instrumento</a><br><br></body></html>';
    response.send(respuesta);
});

router.use('/', (request, response, next) => {
    response.statusCode = 404;
    let respuesta = ('<!DOCTYPE html><html><head><title>Instrumentos | Not Found</title></head><body><h1 id="404">Este sitio no existe, amigo.</h1></body>');
    response.send(respuesta);
})



module.exports = router;
                        