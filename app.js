const express = require('express');
const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rutas_inst = require('./routes/instrumentos.routes');
const rutas_users = require('./routes/user.routes')
path = require('path');
const csrf = require('csurf');
const csrfProtection = csrf();

const app = express();

app.set('view engine', 'ejs');  // Para que funcionen correctamente los archivos .ejs
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));    // damos acceso directo a la carpeta "public".

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

