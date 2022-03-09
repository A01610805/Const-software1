const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
path = require('path');

app.use(express.static(path.join(__dirname, 'public')));    // damos acceso directo a la carpeta "public".
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');  // Para que funcionen correctamente los archivos .ejs
app.set('views', 'views');

const misRutas = require('./routes/instrumentos.routes');

app.use('/', misRutas);


// Middleware: un software que va enmedio
app.use((request, response, next) => {
    console.log("Middleware!");
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

/*
app.use('/instrumentos', (request, response, next) => {     //agrega una ruta
    response.send('Respuesta de la ruta "/instrumentos"');
});

app.use((request, response, next) => {
    console.log('Otro Middleware!');
    response.send('Hola mundo!'); //Manda la respuesta y da por terminada la ejecución
}); */               



app.listen(3000);

