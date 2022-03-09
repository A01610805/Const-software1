const path = require('path');
const Instrumento = require('../models/instrumento');       // para poder acceder al archivo donde guardamos los instrumentos


exports.get_nuevo = (request, response, next) => {
    // se envía el archivo "nuevo.ejs"
    response.render('nuevo', {
        username: request.session.username ? request.session.username: ''   // Se adjunta el username para poder ponerlo en el head
    });
}

exports.post_nuevo = (request, response, next) => {
    const instrumento = new Instrumento(request.body.nombre);   // Se crea un nuevo objeto "instrumento" con el nombre ingresado por el usuario
    instrumento.save();
    response.setHeader('Set-Cookie', 'ultimo_instrumento='+instrumento.nombre+'; HttpOnly');
    response.redirect('/musica/instrumentos');
};

exports.listaInst = (request, response, next) => {
    response.render('lista', {
        instrumentos: Instrumento.fetchAll(),
        username: request.session.username ? request.session.username: '',
        ultimo_instrumento: request.cookies.ultimo_instrumento ? request.cookies.ultimo_instrumento : ''});   
};

exports.inicio = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'inicio.html'));
};

exports.error = (request, response, next) => {
    response.statusCode = 404;
    let respuesta = ('<!DOCTYPE html><html><head><title>Instrumentos | Not Found</title></head><body><h1 id="404">Este sitio no existe, amigo.</h1></body>');
    response.send(respuesta);
};