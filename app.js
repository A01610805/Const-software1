const express = require('express');
const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rutas_inst = require('./routes/instrumentos.routes');
const rutas_users = require('./routes/user.routes')
const multer = require('multer');
path = require('path');
const csrf = require('csurf');
const csrfProtection = csrf();

const app = express();

app.set('view engine', 'ejs');  // Para que funcionen correctamente los archivos .ejs
app.set('views', 'views');


app.use(express.static(path.join(__dirname, 'public')));    // damos acceso directo a la carpeta "public".

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen'));


app.use(cookieParser());
app.use(session({
    secret: 'bjuytrfgbvwertyu76thgfsdertrty76545tyhgf345', 
    resave: false,              //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false,   //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(csrfProtection); 


app.use((request, response, next) => {
     response.locals.csrfToken = request.csrfToken();
     next();
});


app.use('/musica', rutas_inst);
app.use('/users', rutas_users);


// Middleware: un software que va enmedio
app.use((request, response, next) => {
    console.log("Middleware!");
    response.redirect('/users/login');
});
              



app.listen(3000);

