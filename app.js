console.log("hola desde node");

const { Console } = require('console');
//fs: filesystem
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');        //Escribimos 'hola desde node' dentro del archivo 'hola.txt'

const arreglo = [60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {     //Se crea automáticamente una fila priorizada por tiempos, lo que ordena el arreglo.
    setTimeout(() => {
        console.log(item);
    }, item);
}

const http = require('http');

const server = http.createServer( (request,response) => {
    console.log(request);       //solicita todos los datos del request. para algo en específico, usar request.'lo_que_necesites' (ejemplo: request.url)
    response.setHeader('Content-Type', 'text/html');    //para preparar la respuesta.
    response.write("<!DOCTYPE html><html><header><link rel='stylesheet' href='Lab3.css'> <h1>Laboratorio 1</h1><h2>Jose Antonio Lopez <br> A01610805</h2></header>");     // aqui hay que poner el head de un archivo HTML
    response.end();     //Para enviar la respuesta.
});

server.listen(3000);



//Investigar como enviar el archivo completo con filesystem