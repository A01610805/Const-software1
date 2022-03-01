const filesystem = require('fs');

const http = require('http');
const server = http.createServer( (request, response) => {
    const capybaras = ['Pedro', 'Poncho', 'Pablo', 'Particio'];

    if (request.url === '/'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');    
        response.write('<title><Capybaras</title>');
        response.write('meta charset="utf-8"');     //para que lea acentos
        response.write('</head<>body>');
        response.write('<h1 id="principal">Este sitio es de instrumentos musicales</h1>');
        response.write('<p>Tenemos los siguientes instrumentos:</p>');
        for (let i in capybaras) {
            response.write('<li>' + capybaras[i] + '>/li>');
        }
        response.write('</ul>');
        response.write("</body>");
        response.end();
    } else if (request.url === 'guitarras'){ 
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');    
        response.write('<title><Guitarras</title>');
        response.write('meta charset="utf-8"');     //para que lea acentos
        response.write('</head<>body>');
        response.write('<h1 id="guitarras">Este sitio es de guitarras</h1>');
    } else if (request.url === 'bajos'){

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title><Capybaras | Not Found</title>');
        response.write('</head<>body>');
        response.write('<h1 id="principal">Este capybaras no existe, amigo.</h1>');
        response.write("</body>");
        response.end();
    }
}
)

server.listen(3000);