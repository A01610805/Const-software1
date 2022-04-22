const path = require('path');
const axios = require('axios');
const Instrumento = require('../models/instrumento');       // para poder acceder al archivo donde guardamos los instrumentos
const User = require('../models/user');

exports.get_nuevo = (request, response, next) => {
    // se envía el archivo "nuevo.ejs"
    response.render('nuevo', {
        username: request.session.username ? request.session.username: ''   // Se adjunta el username para poder ponerlo en el head
    });
}

exports.post_nuevo = (request, response, next) => {
    const instrumento = new Instrumento(request.body.nombre, request.body.tipo, request.body.descripcion, request.file.filename);   // Se crea un nuevo objeto "instrumento" con el nombre ingresado por el usuario
    instrumento.save()
        .then(() => {
            console.log(request.file.filename);
            response.setHeader('Set-Cookie', 'ultimo_instrumento='+instrumento.nombre+'; HttpOnly');
            response.redirect('/musica/instrumentos');
        })
        .catch( err => console.log(err));
};

exports.listaInst = (request, response, next) => {
Instrumento.fetchAll()
    .then(([rows, fieldData]) => {   // Lo que queremos que ocurra cuando la promesa se cumple
        response.render('lista', {
            instrumentos: rows,
            username: request.session.username ? request.session.username: '',
            ultimo_instrumento: request.cookies.ultimo_instrumento ? request.cookies.ultimo_instrumento : ''
        });   
    })
    .catch(err => {     // Lo que queremos que ocurra si la promesa no se cumple
        console.log(err);
    });
};

exports.filtrar = (request, response, next) => {
    Instrumento.fetchOne(request.params.ID_instrumento)//Modificar
        .then(([rows, fieldData]) => {   // Lo que queremos que ocurra cuando la promesa se cumple
            response.render('lista', {
                instrumentos: rows,
                username: request.session.username ? request.session.username: '',
                ultimo_instrumento: request.cookies.ultimo_instrumento ? request.cookies.ultimo_instrumento : ''
            });   
        })
        .catch(err => {     // Lo que queremos que ocurra si la promesa no se cumple
            console.log(err);
        });
    };

exports.inicio = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'inicio.html'));
};

exports.error = (request, response, next) => {
    response.statusCode = 404;
    let respuesta = ('<!DOCTYPE html><html><head><title>Instrumentos | Not Found</title></head><body><h1 id="404">Este sitio no existe, amigo.</h1></body>');
    response.send(respuesta);
};

exports.buscar = (request, response, next) => {
    console.log(request.params.valor);
    Instrumento.fetch(request.params.valor)
    .then(([rows, fieldData]) => {
        console.log(rows);
        response.status(200).json(rows);
    })
    .catch(err => {
        console.log(err);
    });
}

exports.postArchivo = (request, response, next) => {
    const ruta_archivo = request.file.path;
};

exports.GraficaCrypto = (request, response, next) => {

    response = null;
    new Promise(async (resolve, reject) => {
    try {
        response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
            'X-CMC_PRO_API_KEY': '9891736d-3f64-4f54-87b3-e3b1358c7d34',
        },
        });
    } catch(ex) {
        response = null;
        // error
        console.log(ex);
        console.log("error");
        reject(ex);
    }
    if (response) {
        // success
        const json = response.data;
        console.log(json);
        console.log("exito");
        resolve(json);
    }
    });
}

/*
 .then(([rows, fieldData]) => {   // Lo que queremos que ocurra cuando la promesa se cumple
            console.log(rows);
        })
        .catch(err => {     // Lo que queremos que ocurra si la promesa no se cumple
            console.log(err);
        }
        */