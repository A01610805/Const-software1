console.log("hola desde node");

//fs: filesystem
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');        //Escribimos 'hola desde node' dentro del archivo 'hola.txt'