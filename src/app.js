const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
	host: 'localhost',
   	user: 'root',
   	password: 'root',
   	database: 'TTS',
   	port: 3306
}, 'single'));
app.use(express.json());
app.use(express.urlencoded({extended: true})); //El módulo de express que traduce todos los datos que se reciben en los formularios.

//importing routes
const inicioRoutes = require('./routes/inicio.js');
const loginRoutes = require('./routes/login.js');
const pacientesRoutes = require('./routes/pacientes.js');
const reg_doctRoutes = require('./routes/reg_doct.js');
const reg_pacRoutes = require('./routes/reg_pac.js');
const info_pacienteRoutes = require('./routes/info_paciente.js');
const pacientes_updRoutes = require('./routes/pacientes_update.js');

//routes
app.use('/',inicioRoutes);
app.use('/',loginRoutes);
app.use('/',pacientesRoutes);
app.use('/',reg_doctRoutes);
app.use('/',reg_pacRoutes);
app.use('/',info_pacienteRoutes);
app.use('/',pacientes_updRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));

//starting server
app.listen(app.get('port'), () =>{
	console.log('Servidor iniciado...');
});

//bugs
app.get('/favicon.ico', (req, res) => res.status(204));//No sé qué pun con esto pero así lo puedo ignorar.