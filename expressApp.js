const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 

//Middleware: un software que va enmedio
app.use((request, response, next) => {
    console.log("Middleware!");
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/instrumentos', (request, response, next) => {
    response.send('Respuesta de la ruta "/instrumentos"');
});

app.use((request, response, next) => {
    console.log('Otro Middleware!');
    response.send('Hola mundo!'); //Manda la respuesta y da por terminada la ejecución
});



app.listen(3000);

