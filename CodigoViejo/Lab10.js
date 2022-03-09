const filesystem = require('fs');

const instrumentos = ['Guitarras', 'Bajos', 'Pianos', 'Saxofones'];

const http = require('http');
const server = http.createServer( (request, response) => {

    if (request.url === '/'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');  
        response.write('<meta charset="utf-8">');  //para que lea acentos 
        response.write('<title>Instrumentos</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de instrumentos musicales</h1>');
        response.write('<p>Tenemos los siguientes instrumentos:</p>');
        response.write('<ul>');
        for (let i in instrumentos) {
            response.write('<li>' + instrumentos[i] + '</li>');
        }
        response.write('</ul><br>');
        response.write('<a href="nuevo">Agregar un instrumento</a><br><br>')    // link a "/nuevo"
        response.write("</body>");
        response.end();
    } else if (request.url === '/nuevo' && request.method === 'GET'){ 
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');     //para que lea acentos    
        response.write('<title>Nuevo Instrumento</title>');
        response.write('</head><body>');
        response.write('<h1 id="guitarras">Este sitio es para ingresar nuevos instrumentos</h1>');
        response.write('<form action="nuevo" method="POST"');   //esto te envía directamente al siguiente request al hacer click en "enviar"
        response.write('<label for="nombre">Nombre del instrumento: </label>');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="violín">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de instrumentos</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/nuevo' && request.method === 'POST'){
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_dato = datos_completos.split('=')[1];
            instrumentos.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');    
            response.write('<title>Nuevos Instrumentos</title>');
            response.write('<meta charset="utf-8">');     //para que lea acentos
            response.write('</head><body>');
            response.write('<h1 id="nuevos">Este sitio es para ingresar nuevos instrumentos</h1>');
            response.write('<p>Tenemos los siguientes capybaras:</p>');
            response.write('<ul>');
            for (let i in instrumentos) {
            response.write('<li>' + instrumentos[i] + '</li>');            
        }
        response.write('</ul>');
        response.write('<br><br>');
        response.write('<a href="nuevo">Agregar un nuevo instrumento</a>');
        response.write('</body>');
        return response.end();

        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Instrumentos | Not Found</title>');
        response.write('</head><body>');
        response.write('<h1 id="404">Este sitio no existe, amigo.</h1>');
        response.write("</body>");
        response.end();
    }
}
)

server.listen(3000);



/* Lab 14; esto va en controller.js

// Esto va en Lab12.js, junto con app.use bodyParser.
app.use(cookieParser());
app.use(session({
    secret: 'uytrfvbnioi76543wsdcvsr45rtgbjki987yhnbvcd', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

// Para utilizar las variables de sesión en un controlador
Request.session.nombre_variable = valor;

*/