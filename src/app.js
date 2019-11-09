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
   	password: 'Alohomora21v',
   	database: 'ttsuicidev2chida',
   	dateStrings:true,
   	port: 3306
}, 'single'));
app.use(express.json());
app.use(express.urlencoded({extended: true})); //El módulo de express que traduce todos los datos que se reciben en los formularios.

//importing routes
const inicioRoutes = require('./routes/inicio.js');
const loginRoutes = require('./routes/login.js');
const indexRoutes = require ('./routes/index.js');
const pacientesRoutes = require('./routes/pacientes.js');
const reg_doctRoutes = require('./routes/reg_doct.js');
const reg_pacRoutes = require('./routes/reg_pac.js');
const info_pacienteRoutes = require('./routes/info_paciente.js');
const pacientes_updRoutes = require('./routes/pacientes_update.js');
const ini_cuestRoutes = require('./routes/ini_cuest.js');
const ssm_ersRoutes = require('./routes/ssm_ers.js');
const phq_2Routes = require('./routes/phq_2.js');
const phq_9Routes = require('./routes/phq_9.js');
const rflRoutes = require('./routes/rfl.js');
const citaRoutes = require('./routes/cita.js');
const cita_updRoutes = require('./routes/cita_update.js');
const reg_citaRoutes = require('./routes/reg_cita.js');
const visuacitRoutes = require('./routes/visuacit.js');
const histclinicoRoutes = require('./routes/histclinico.js');
const atenderRoutes = require('./routes/atender.js');
const generreporRoutes = require('./routes/generar_reporte.js');
const diagRoutes = require('./routes/diagnosticar.js');
const listResRoutes = require('./routes/listResultado.js');

//routes
app.use('/',inicioRoutes);
app.use('/',loginRoutes);
app.use('/',indexRoutes);
app.use('/',pacientesRoutes);
app.use('/',reg_doctRoutes);
app.use('/',reg_pacRoutes);
app.use('/',info_pacienteRoutes);
app.use('/',pacientes_updRoutes);
app.use('/',ini_cuestRoutes);
app.use('/',ssm_ersRoutes);
app.use('/',phq_2Routes);
app.use('/',phq_9Routes);
app.use('/',rflRoutes);
app.use('/',citaRoutes);
app.use('/',cita_updRoutes);
app.use('/',reg_citaRoutes);
app.use('/',visuacitRoutes);
app.use('/',histclinicoRoutes);
app.use('/',atenderRoutes);
app.use('/',generreporRoutes);
app.use('/',diagRoutes);
app.use('/',listResRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));

//starting server
app.listen(app.get('port'), () =>{
	console.log('Servidor iniciado...');
});

//bugs
app.get('/favicon.ico', (req, res) => res.status(204));//No sé qué pun con esto pero así lo puedo ignorar.
