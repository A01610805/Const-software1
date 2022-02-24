console.log("hola desde node");

//fs: filesystem
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');        //Escribimos 'hola desde node' dentro del archivo 'hola.txt'

const arreglo = [5000, 60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {     //Se crea automáticamente una fila priorizada por tiempos, lo que ordena el arreglo.
    setTimeout(() => {
        console.log(item);
    }, item);
}