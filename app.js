//Laboratorio 8
//Jose Antonio López
//A01610805

const { Console } = require('console');
//fs: filesystem
const filesystem = require('fs');

//filesystem.writeFileSync('hola.txt', 'Hola desde node');        //Escribimos 'hola desde node' dentro del archivo 'hola.txt'

const arreglo = [60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];

// Ejercicio 1: función para sacar promedios
function prom(x){
    let promedio = 0;
    let suma = 0;
    let count = 0;
    for (let item of x) {
        suma += item;
        count += 1;
    }
    promedio = suma/count;
    return promedio;
}
let promedio = prom(arreglo);
console.log(promedio);


//Ejercicio 2: función que recibe string y lo escribe en un txt
function escribe(str){
    filesystem.writeFileSync('ejercicio2.txt', str);
}
escribe('Hello world');


//Ejercicio 3: Tabla de cuadrados y cubos

function cuad_cubos(n) {
    for (let i = 1; i <= n; i++){
        console.log(i + " " + i*i + " " + i*i*i);
    }
}
cuad_cubos(4);

const http = require('http');

/*const server = http.createServer( (request,response) => {
    console.log(request);       //solicita todos los datos del request. para algo en específico, usar request.'lo_que_necesites' (ejemplo: request.url)
    response.setHeader('Content-Type', 'text/html');    //para preparar la respuesta.
    response.write("<!DOCTYPE html><html><header><link rel='stylesheet' href='Lab3.css'> <h1>Laboratorio 1</h1><h2>Jose Antonio Lopez <br> A01610805</h2></header>");     // aqui hay que poner el head de un archivo HTML
    response.end();     //Para enviar la respuesta.
});

server.listen(3000);*/



//Investigar como enviar el archivo completo con filesystem