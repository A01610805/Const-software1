const path = require('path');
const Instrumento = require('../models/instrumento');
const instrumentModel = require('../models/instrumento');       // para poder acceder al archivo donde guardamos los instrumentos

exports.listaInst = (request, response, next) => {
    response.render('lista', {instrumentos: instrumentModel.fetchAll()});   
};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');   // se envía el archivo "nuevo.ejs"
}

exports.post_nuevo = (request, response, next) => {
    const instrumento = new Instrumento(request.body.nombre);   // Se crea un nuevo objeto "instrumento" con el nombre ingresado por el usuario
    instrumento.save();
    response.redirect('/instrumentos');
};

exports.inicio = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'inicio.html'));
};

exports.error = (request, response, next) => {
    response.statusCode = 404;
    let respuesta = ('<!DOCTYPE html><html><head><title>Instrumentos | Not Found</title></head><body><h1 id="404">Este sitio no existe, amigo.</h1></body>');
    response.send(respuesta);
};